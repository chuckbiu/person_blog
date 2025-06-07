import React from 'react';
import s from './index.module.less';

const BlogCard: React.FC = () => {

  return (
    <>
      <div className={s.blogCard}>
        {/* 头像 */}
        <div className={s.avatar}>
          <img src="https://i.postimg.cc/63JC7kH9/photo-2024-11-05-12-20-22.jpg" alt="" />
        </div>
        <div className={s.title}>
          <h2>
            Chuck
          </h2>
          <span>
            道阻且长，行则将至
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