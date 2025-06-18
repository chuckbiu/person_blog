import React, { useEffect, useState } from 'react';
import ArticleStyle from "./index.module.less"
import { Input, Skeleton } from 'antd';
import { LogoutOutlined, RedoOutlined } from '@ant-design/icons';
import MyPagination from "../../components/MyPagination/MyPagination";
import Layout from "../../components/Layout/Layout";
import { models, ensureCloudBaseReady } from '../../utils/cloudBase';
import { useRequest } from 'ahooks';
import { formatDate } from '../../utils/hooks/formatDate';
import { useNavigate } from 'react-router-dom';

const Articles: React.FC = () => {
  const navigate = useNavigate()
  const [articleList, setArticleList] = useState<any>([])
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1)
  const [inputValue, setInputValue] = useState("")
  const [total, setTotal] = useState<number>(0)

  const fetchData = async () => {
    setLoading(true)
    try {
      // 最重要的改动：在请求数据前等待 SDK 准备就绪
      await ensureCloudBaseReady();
      const { data } = await models.blog_tpl_post.list({
        getCount: true, // 是否返回总数
        envType: "prod",
        pageSize: 10, // 每页条数
        pageNumber: page, // 第几页
        orderBy: [
          {
            createdAt: "desc", // 创建时间，倒序
          },
        ],
        filter: {
          where: {
            body: {
              $nempty: true,
            },
            title: {
              $search: inputValue,
            },
          },
        },
      });
      // 返回查询到的数据和总数
      if (data?.records.length >= 0) {
        setArticleList(data.records)
      }
      setTotal(data?.total || 0)
    } catch (error) {
      console.error("获取文章列表失败:", error);
      setArticleList([]); // 发生错误时清空列表
      setTotal(0);
    } finally {
      setLoading(false);
    }
  }
  const { data, run } = useRequest(fetchData, {
    debounceWait: 1000,
    manual: true
  });
  // const onSearch = (value: string) => {
  //   setInputValue(value)
  //   run()
  // }
  // 处理搜索输入框内容变化
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    // 当输入值变化时，不立即触发搜索，而是等待防抖结束
  };
  // 处理“搜索”按钮点击（即 LogoutOutlined）
  const handleSearchClick = () => {
    setLoading(true);
    setPage(1); // 搜索时重置回第一页
    run(); // 触发 fetchData，它会使用当前的 inputValue
  };
  // 处理“刷新”按钮点击（即 RedoOutlined）
  const handleRefreshClick = () => {
    setLoading(true);
    setInputValue(""); // 刷新时清空搜索框
    setPage(1); // 刷新时重置回第一页
    run(); // 触发 fetchData
  };
  useEffect(() => {
    fetchData()
  }, [page, run]) // 依赖 page 和 run (run 是 useRequest 返回的稳定函数)

  return (
    <Layout title={'文章'} >
      <div className={ArticleStyle.container}>
        <div className={ArticleStyle.articleList}>
          <div className={ArticleStyle.articleheader}>
            <Input
              type='text'
              placeholder="请输入标题进行搜索..."
              className={ArticleStyle.search}
              value={inputValue} // 绑定输入框值到 state
              onChange={handleInputChange} // 使用 onChange 监听值变化
            />
            <div className={ArticleStyle.icon}>
              {/* 搜索按钮：点击触发搜索，使用当前 inputValue */}
              <span onClick={handleSearchClick} className={ArticleStyle.iconButton}>
                <LogoutOutlined />
              </span>
              {/* 刷新按钮：点击清空搜索并刷新列表到第一页 */}
              <span onClick={handleRefreshClick} className={ArticleStyle.iconButton}>
                <RedoOutlined />
              </span>
            </div>
          </div>
          {/* 根据 loading 状态和 articleList 长度显示骨架屏或内容 */}
          {loading ? (
            Array.from({ length: 10 }).map((_, index) => (
              <Skeleton.Input key={index} active={true} className={ArticleStyle.skeletonStyle} />
            ))
          ) : articleList.length > 0 ? (
            articleList.map((item: any, index: number) => ( // 最好为 item 定义一个接口
              <div className={ArticleStyle.articleItem} key={item._id || index} onClick={() => navigate(`/post?_id=${item._id}`)}>
                <div>
                  {item.title || '无标题'}
                </div>
                <div>
                  {item.updatedAt ? formatDate(item.updatedAt) : '未知日期'}
                </div>
              </div>
            ))
          ) : (
            <div style={{ textAlign: 'center', padding: '20px', color: '#666' }}>
              暂无文章或搜索结果。
            </div>
          )}
        </div>
        <MyPagination total={total} defaultPageSize={10} setPage={setPage}></MyPagination>
      </div>
    </Layout>
  )

}
export default Articles