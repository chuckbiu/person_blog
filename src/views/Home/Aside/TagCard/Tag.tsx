import React from 'react';
import s from './index.module.less';

interface TagCloudProps {
  tags: string[];
}

const Tag: React.FC<TagCloudProps> = ({ tags }) => {
  return (
    <div className={s.tagCloud}>
      {tags.map((tag, index) => (
        <span key={index} className={s.tag}>
          {tag}
        </span>
      ))}
    </div>
  );
};

export default Tag;