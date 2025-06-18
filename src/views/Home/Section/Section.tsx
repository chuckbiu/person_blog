import React, { useEffect, useState } from "react";
import SectionStyle from './index.module.less'
import MyPagination from '../../../components/MyPagination/MyPagination';
import TableCard from './TableCard/TableCard';
import { useNavigate } from 'react-router-dom';
import { models, ensureCloudBaseReady } from '../../../utils/cloudBase';
 
interface SectionProps {
}
const Section: React.FC<SectionProps> = () => {
    const navigate = useNavigate();
    const [data, setData] = useState<any>([{_id: 1}, { _id: 2},{_id: 3}, {_id: 4}, {_id: 5}, {_id: 6}])
    const [total, setTotal] = useState<number>(0)
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1);


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
              // 最重要的改动：在请求数据前等待 SDK 准备就绪
              await ensureCloudBaseReady(); 
            const { data } = await models.blog_tpl_post.list({
              getCount: true, // 是否返回总数
              envType: "prod",
              pageSize: 6, // 每页条数
              pageNumber: page, // 第几页
            });
            // 返回查询到的数据和总数
            if (data?.records.length >= 0) {
                setData(data.records)
                setLoading(false)
            }
            setTotal(data?.total || 0)
          }
          fetchData()   
    }, [page])
    return (
        <section className={SectionStyle.section}>
            {data?.map((item: any) => (
                <TableCard key={item._id} title={item.title} onClick={() => navigate(`/post?_id=${item._id}`)} summary={item.summary}  createBy={item.createBy} updatedAt={item.updatedAt} loading={loading}/>
            ))}
            <MyPagination total={total} defaultPageSize={6} setPage={setPage}/>
        </section>
    )
}
export default Section;