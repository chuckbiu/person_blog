import React from 'react';
import { marked } from "marked";
import { useState } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
marked.setOptions({
    highlight: (code: string, lang: string) => {
        if (lang && hljs.getLanguage(lang)) {
            return hljs.highlight(code, { language: lang }).value;
        }
        return hljs.highlightAuto(code).value;
    },
});

const Post: React.FC = () => {
    const [markdown, setMarkdown] = useState("# Hello, Marked!");
    return (
        <div>
            <textarea
                value={markdown}
                onChange={(e) => setMarkdown(e.target.value)}
            />
            <div dangerouslySetInnerHTML={{ __html: marked(markdown) }} />
        </div>
    )
}

export default Post;