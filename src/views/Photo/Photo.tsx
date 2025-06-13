import React, { useEffect, useState } from "react";
import PhotoStyles from "./index.module.less";
import 'antd/dist/reset.css';
import PhotoCard from "./PhotoCard/PhotoCard";
import { Empty } from 'antd';
import { fetchData } from "@/utils/apis/getPhoto"
import Layout from "../../components/Layout/Layout";
// interface PhotoItems {
//   title: string;
//   url?: string;

// }

const Photo: React.FC = () => {
  const [tabList, setTabList] = useState<string[]>(["全部", "日出", "海洋", "天空", "景点"]);
  const [currentTab, setCurrentTab] = useState<number>(0);
  // const [photoData, setPhotoData] = useState<any[]>([]);
  const handleTabClick = (index: number) => {
    setCurrentTab(index);
  };

  // 图片数据
  const photoData = [
    { url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80', title: '图画', desc: '大雪纷飞的北国风光...', category: '全部' },
    { url: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80', title: '星空', desc: '', category: '田野' },
    { url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80', title: 'beef', desc: '', category: '美食' },
    { url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80', title: 'smell', desc: '', category: '人物' },
    { url: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80', title: '家乡山坡上的落日', desc: '', category: '日出' },
    { url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80', title: '烟台的海的日出', desc: '', category: '海洋' },

  ];

  // 根据当前标签筛选图片
  const currentCategory = tabList[currentTab];
  const filteredPhotos = currentCategory === '全部'
    ? photoData.slice(0, 15)
    : photoData.filter(photo => photo.category === currentCategory);

  useEffect(() => {
    fetchData()
  })

  return (
    <Layout>
      <div className={PhotoStyles.photo}>
        {/* 分类标签 */}
        <div className={PhotoStyles.tabCard}>
          <ul className={PhotoStyles.tabList}>
            {tabList.map((item, index) => (
              <li className={PhotoStyles.tabListitem} key={index}>
                <div
                  className={`${PhotoStyles.tabListItemContent} ${currentTab === index ? PhotoStyles.active : ""}`}
                  onClick={() => handleTabClick(index)}
                >
                  {item}
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* 图片列表 */}
        <div className={PhotoStyles.photoList}>
          {filteredPhotos.length > 0 ? filteredPhotos.map((photo, idx) => (
            <div key={idx}>
              <PhotoCard key={idx} url={photo.url} title={photo.title} desc={photo.desc} category={photo.category}>
              </PhotoCard>
            </div>
          )) : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} className={PhotoStyles.emptyStyle}/>
          }
        </div>
      </div>
    </Layout>
  )
}
export default Photo;