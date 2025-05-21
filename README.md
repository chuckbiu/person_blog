1. ts环境


- 使用`typescript`编写代码
- 使用`commitlint`保证`git commit`提交规范
- 使用`eslint`规范代码风格
- 使用`husky`在每次提交之前，触发`commitlint`与`eslint`
- 区分开发环境、生产环境，并抽离公共配置
- CSS 预处理器使用`scss`
### react-router @6

采用声明模式路由

### less

1. 变量
2. 嵌入
3. 扩展

Extend 扩展

```css
nav ul {
  &:extend(.inline);
  background: blue;
}
```

4. 继承 Merge 

```css
.mixin() {
  box-shadow+: inset 0 0 10px #555;
}
.myclass {
  .mixin();
  box-shadow+: 0 0 20px black;
}

.myclass {
  box-shadow: inset 0 0 10px #555, 0 0 20px black;
}
```



## 插件

#### **marked**

**marked** 可以在 **Vite** 搭建的 **React** 框架中使用。Vite 本身对大多数 JavaScript 库都有良好的支持，而 marked 是一个纯 JavaScript 的 Markdown 解析库，没有特殊的依赖，因此可以很好地集成到 Vite + React 项目中。

如何在 Vite + React 中使用 marked

**安装 marked**

```shell
npm install marked
# 或
yarn add marked
# 或
pnpm add marked
```

**基本使用示例**

```tsx
import { marked } from "marked";
import { useState } from "react";

export default function MarkdownRenderer() {
  const [markdown, setMarkdown] = useState("# Hello, Marked!");

  return (
    <div>
      <textarea
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />
      <div dangerouslySetInnerHTML={{ __html: marked(markdown) }} />
    </div>
  );
}
```

3. **安全注意事项**

由于 `marked` 直接输出 HTML，使用 `dangerouslySetInnerHTML` 可能会引入 **XSS 攻击**。建议配合 **DOMPurify** 进行净化：

```shell
npm install dompurify
# 或
yarn add dompurify
```

然后使用：

```tsx
import { marked } from "marked";
import DOMPurify from "dompurify";

function safeMarkdown(markdown: string) {
  return DOMPurify.sanitize(marked(markdown));
}

// 在组件中使用
<div dangerouslySetInnerHTML={{ __html: safeMarkdown(markdown) }} />
```

------

**可选优化**

1. **启用 GitHub Flavored Markdown (GFM)**

```tsx
import { marked } from "marked";

marked.setOptions({
  gfm: true,
  breaks: true,
});
```

2. **代码高亮（使用 highlight.js）**

```
npm install highlight.js
```

配置：

```tsx
import hljs from "highlight.js";
import "highlight.js/styles/github.css"; // 选择喜欢的样式

marked.setOptions({
  highlight: (code, lang) => {
    if (lang && hljs.getLanguage(lang)) {
      return hljs.highlight(code, { language: lang }).value;
    }
    return hljs.highlightAuto(code).value;
  },
});
```

------

**替代方案**

如果你希望更现代化的 React Markdown 方案，可以考虑：

1. **react-markdown**（推荐，基于 Vite 友好）

   ```
   npm install react-markdown
   ```

2. **MDX**（支持 JSX + Markdown 混合）

   ```
   npm install @mdx-js/react
   ```

------

#### **总结**

✅ **marked** 完全支持 **Vite + React**，只需直接安装并使用。
✅ 建议配合 **DOMPurify** 防止 XSS 攻击。
✅ 可通过 **highlight.js** 实现代码高亮。
🚀 如需更 React 友好的方案，可尝试 **react-markdown** 或 **MDX**。



### 新功能



新增的其实就一个：

- 新增主题切换功能，一键切换**黑**/**蓝**/**灰**三种主题，保存至`localStorage`，下次打开时自动切换至已选的主题


