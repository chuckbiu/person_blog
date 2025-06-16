import React, { useEffect, useState } from "react";
import SectionStyle from './index.module.less'
import MyPagination from '../../../components/MyPagination/MyPagination';
import TableCard from './TableCard/TableCard';
import { useNavigate } from 'react-router-dom';
import { models } from '../../../utils/cloudBase';

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
            const { data } = await models.blog_tpl_post.list({
              getCount: true, // 是否返回总数
              envType: "prod",
              pageSize: 5, // 每页条数
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
            {data?.map((item) => (
                <TableCard key={item._id} title={item.title} onClick={() => navigate(`/post?_id=${item._id}`)} summary={item.summary}  createBy={item.createBy} updateBy={item.updateBy} loading={loading}/>
            ))}
            <MyPagination total={total} defaultPageSize={6} setPage={setPage}/>
        </section>
    )
}
export default Section;