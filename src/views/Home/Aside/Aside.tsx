import React from "react";
import AsideStyle from './index.module.less'
import BlogCard from './BlogCard/BlogCard'
import AccountCard from './AccountCard/AccountCard'
import WeathertimeCard from './WeathertimeCard/index'
import Tag from "./TagCard/Tag";

interface AsideProps {


}
const Aside: React.FC<AsideProps> = ({ }) => {
    
    const tags = [
        'Vuex', 'Flex', 'Grid', 'CSS',
        'HTML', 'JavaScript', 'Git',
        '正则表达式', 'TypeScript', 'Java',
        'Element', 'MySQL', 'Ant Design',
        'HTTPS', '小程序', 'Vue2', 'Vue3',
        'Canvas', '开发笔记', '学习笔记',
        'Pinia', 'Redux', '面试笔记'
    ];

    return (
        <>
            <aside className={AsideStyle.aside}>
                <BlogCard></BlogCard>
                <AccountCard></AccountCard>
                <WeathertimeCard></WeathertimeCard>
                <Tag tags={tags}></Tag>
            </aside>
        </>
    )
}
export default Aside;