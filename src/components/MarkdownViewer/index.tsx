import React, { useEffect, useState } from 'react';
import { marked } from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css';
import "github-markdown-css/github-markdown.css";
import s from './index.module.less';
import GithubSlugger from 'github-slugger';

// MarkdownViewer 组件：接收 markdown 字符串，渲染 HTML 并生成目录
export function MarkdownViewer({ markdown }) {



  const [html, setHtml] = useState('');
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    const slugger = new GithubSlugger();

    // 配置 marked 渲染器
    const renderer = new marked.Renderer();
    renderer.heading = function({ tokens, depth }) {
      // 获取标题文本并生成小写 slug
      const text = this.parser.parseInline(tokens);
      // 生成 ID：去掉非字母数字，用短横线连接
      const slug = slugger.slug(text); // 自动生成唯一 id（如 "介绍", "介绍-1", "介绍-2"）
      // 返回带 id 的标题标签
      return `<h${depth} id="${slug}">${text}</h${depth}>\n`;
    };

    // 设置 highlight.js 进行代码高亮
    marked.setOptions({
      renderer,
      gfm: true,
      breaks: true,
      highlight: code => hljs.highlightAuto(code).value
    });

    // 解析 markdown 得到原生 HTML
    const rawHtml = marked.parse(markdown);

    setHtml(rawHtml);
    slugger.reset(); // 每次渲染前重置状态

    // 提取所有标题生成目录数据
    const container = document.createElement('div');
    container.innerHTML = rawHtml;
    const headingNodes = container.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const toc = [];
    headingNodes.forEach(node => {
      toc.push({
        id: node.id,
        text: node.innerText || node.textContent,
        level: Number(node.tagName.charAt(1))
      });
    });
    setHeadings(toc);
    console.log(toc);
  }, [markdown]);

  return (
    <div className={s.container}>
      {/* 主内容区：使用 dangerouslySetInnerHTML 渲染 Markdown */}
      <div className={`markdown-body ${s.markdown}`} dangerouslySetInnerHTML={{ __html: html }} />

      {/* 右侧目录：使用提取到的标题列表 */}
      <div className={s.toc}>
        <h3>目录</h3>
        <ul>
          {headings.map(h => (
            <li key={h.id} style={{ marginLeft: (h.level - 1) * 16 }}>
              <a href={`#${h.id}`} className={`h${h.level}`}>
                {h.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
