import React from "react";
import SectionStyle from './index.module.less'
import MyPagination from '../../../components/MyPagination/MyPagination';
import TableCard from './TableCard/TableCard';
import { useNavigate } from 'react-router-dom';
interface SectionProps {
}
const Section: React.FC<SectionProps> = () => {
    const navigate = useNavigate();
    // const handleClick = (id: number) => {
    //     console.log("first", id)
    //     navigate('/post');
    // }
    const data = [
        {
            id: 1,
            title: '一道代码题看 CommonJS 模块化规范',
            content: '选择器id选择器(#myid)类选择器(.myclass)属性选择器(a[rel="external"])伪类选择器(a:hover, li:nth-child)标签选择器(div, h1,p)相邻选择器（h1 + p）后代选择器(li a)通配符选择器(*)优先级：!important内联样式（1000）ID选择器（0100）类选择器/属性选择器/伪类选择器（0010）元素选择器/伪元素选择器（0001）关系选择器/通配符选择器（0000）',
        },
        {
            id: 2,
            title: '一道代码题看 CommonJS 模块化规范',
            content: '选择器id选择器(#myid)类选择器(.myclass)属性选择器(a[rel="external"])伪类选择器(a:hover, li:nth-child)标签选择器(div, h1,p)相邻选择器（h1 + p）后代选择器(li a)通配符选择器(*)优先级：!important内联样式（1000）ID选择器（0100）类选择器/属性选择器/伪类选择器（0010）元素选择器/伪元素选择器（0001）关系选择器/通配符选择器（0000）',
        },
        {
            id: 3,
            title: '一道代码题看 CommonJS 模块化规范',
            content: '选择器id选择器(#myid)类选择器(.myclass)属性选择器(a[rel="external"])伪类选择器(a:hover, li:nth-child)标签选择器(div, h1,p)相邻选择器（h1 + p）后代选择器(li a)通配符选择器(*)优先级：!important内联样式（1000）ID选择器（0100）类选择器/属性选择器/伪类选择器（0010）元素选择器/伪元素选择器（0001）关系选择器/通配符选择器（0000）',
        },
    ]
    return (
        <section className={SectionStyle.section}>
            {data?.map((item) => (
                <TableCard key={item.id} title={item.title} onClick={() => navigate(`/post?id=${item.id}`)} content={item.content} />
            ))}
            <MyPagination />
        </section>
    )
}
export default Section;