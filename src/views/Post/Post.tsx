import React, { useState, useEffect } from 'react';
import s from './index.module.less'
import { MarkdownViewer } from '../../components/MarkdownViewer';
// 导入md文件
import Layout from '../../components/Layout/Layout';
import { models } from '../../utils/cloudBase';
import { useSearchParams, useLocation } from 'react-router-dom'

const useScrollToTop = () => {
    const location = useLocation(); // 获取当前路由的location对象
    useEffect(() => {
        // 监听 location.pathname 变化，当路径改变时执行滚动
        // 如果只需要在路由完全切换（包括hash和search参数）时滚动，可以使用 location 而不是 location.pathname
        window.scrollTo(0, 0); // 将页面滚动到顶部
        // console.log('路由已变化，页面已滚动到顶部:', location.pathname);
    }, [location.pathname]); // 依赖项为 location.pathname，确保只有路径改变时才触发
};
const Post: React.FC = () => {
    // const [loading, setLoading] = useState(true)
    const [data, setData] = useState<any>()
    // const { _id } = useLocation()
    const [searchParams, setSearchParams] = useSearchParams()
    const _id = searchParams.get('_id') || 0
    useScrollToTop();
    useEffect(() => {

        const fetchData = async () => {
            // setLoading(true)
            const { data } = await models.blog_tpl_post.list({
                envType: "prod",
                filter: {
                    where: {
                        $and: [
                            {
                                _id: {
                                    $eq: _id, // 推荐传入_id数据标识进行操作
                                },
                            },
                        ]
                    }
                },
            });
            // 返回查询到的数据和总数
            if (data?.records.length >= 0) {
                setData(data.records[0].wznr)
            }
        }
        fetchData()
    }, [])
    return (
        <Layout>
            <div className={s.container}>
                <MarkdownViewer markdown={data} />
            </div>
        </Layout>
    )
}

export default Post;