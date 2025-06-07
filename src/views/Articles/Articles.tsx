import React from "react";
import ArticleStyle from "./index.module.less"
import { Input } from 'antd';
import { LogoutOutlined, RedoOutlined } from '@ant-design/icons';
import MyPagination from "../../components/MyPagination/MyPagination";
const Articles: React.FC = () => {
  const [articleList, setArticleList] = React.useState([{ title: "文章1", date: "2022-01-01" }, { title: "文章2", date: "2022-01-02" }, { title: "文章3", date: "2022-01-03" }, { title: "文章4", date: "2022-01-04" }, { title: "文章5", date: "2022-01-05" }, { title: "文章6", date: "2022-01-06" }, { title: "文章7", date: "2022-01-07" }, { title: "文章8", date: "2022-01-08" }, { title: "文章9", date: "2022-01-09" }, { title: "文章10", date: "2022-01-10" }])
  // const [articleList, setArticleList] = React.useState([])
  // React.useEffect(() => {
  return (
    <>
      <div className={ArticleStyle.header}>所有文章</div>
      <div className={ArticleStyle.container}>
        <div className={ArticleStyle.articleList}>
          <div className={ArticleStyle.articleheader}>
            <Input placeholder="Basic usage" className={ArticleStyle.search} />
            <div className={ArticleStyle.icon}>
            <LogoutOutlined />
            <RedoOutlined />
            </div>
          </div>
          {
            articleList.map((item, index) => {
              return (
                <div className={ArticleStyle.articleItem} key={index}>
                  <div>
                    {item.title}
                  </div>
                  <div>
                    {item.date}
                  </div>
                </div>
              )
            })
          }
        </div>
        <MyPagination></MyPagination>
      </div>
    </>
  )

}
export default Articles