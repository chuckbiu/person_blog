import React from 'react';
import styles from './index.module.less'
import { Divider, Tag, List, Space, Typography } from "antd";
import { EditOutlined } from "@ant-design/icons";
import ReactECharts from "echarts-for-react";
const { Paragraph, Link, Text } = Typography;


const pieOption = {
    tooltip: { trigger: 'item' },
    legend: { orient: 'vertical', left: 'left' },
    series: [
        {
            name: '文章分类',
            type: 'pie',
            radius: '60%',
            data: [
                { value: 10, name: 'JavaScript 常见问题' },
                { value: 8, name: '前端基础' },
                { value: 7, name: 'LeetCode 题解' },
                { value: 6, name: 'JavaScript 数据结构与算法' },
                { value: 5, name: 'HTTP 学习记录' },
                { value: 3, name: 'React 学习笔记' },
                { value: 2, name: 'JavaScript 手撕代码' },
                { value: 2, name: 'CSS' },
            ],
            emphasis: { itemStyle: { shadowBlur: 10, shadowOffsetX: 0, shadowColor: 'rgba(0, 0, 0, 0.5)' } }
        }
    ]
};

const AboutSite: React.FC = () => (
    <div className={styles.section}>
        <Divider orientation="left"><b>📊 文章分布</b></Divider>
        <ReactECharts option={pieOption} style={{ height: 300 }} />
        <Divider orientation="left"><b><EditOutlined /> 关于本站</b></Divider>
        <Paragraph>
            本站是自己学习了
            <Link href="https://react.dev/" target="_blank">React</Link>
            后，用 React 写的个人博客系统，包括
            <Link href="#">博客展示页面</Link>

            。现在看到的就是博客展示页面。
        </Paragraph>
        <Paragraph>
            主要整理、分享一些自己的学习笔记和心得，若有错误，欢迎大家指出、交流！
        </Paragraph>


        <Paragraph>
            <Tag color="blue">博客主要使用到的库如下：</Tag>
            <List
                size="small"
                dataSource={[
                    { title: "前端（博客展示页面）", desc: "React, antd, echarts-for-react" },
                    { title: "后台（管理页面）", desc: "React, antd, ...（未上线）" }
                ]}
                renderItem={item => (
                    <List.Item>
                        <Space>
                            <Text strong>{item.title}</Text>
                            <Text type="secondary">{item.desc}</Text>
                        </Space>
                    </List.Item>
                )}
            />
        </Paragraph>
    </div>
);
export default AboutSite;