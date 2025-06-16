import React from 'react';
import s from './index.module.less';
import { blogAdminUrl } from '../../../../utils/constant';
import { useTime } from '../../../../utils/hooks/useTime' 
const BlogCard: React.FC = () => {
  const { timeText } = useTime()
  return (
    <>
      <div className={s.blogCard}>
        {/* 头像 */}
        <div className={s.avatar}>
          <img src={blogAdminUrl} alt="" />
        </div>
        <div className={s.title}>
          <h2>
            Chuck
          </h2>
          <span>
            大家  { timeText } 欢迎来到我的博客
          </span>
        </div>
        <div className={s.stats}>
          <div className={s.statItem}>
            <span>文章</span>
            <span>23</span>
          </div>
          <div className={s.statItem}>
            <span>分类</span>
            <span>23</span>
          </div>
          <div className={s.statItem}>
            <span>标签</span>
            <span>23</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;