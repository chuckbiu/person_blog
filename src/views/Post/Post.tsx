import React from 'react';
import s from './index.module.less'
import { MarkdownViewer } from '../../components/MarkdownViewer';
// 导入md文件
import exampleMd from '../docs/this/index.md?raw'


const Post: React.FC = () => {
  
    return (
        <div className={s.container}>
            <MarkdownViewer markdown={exampleMd} />
        </div>
    )
}

export default Post;