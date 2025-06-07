import React, { useState } from 'react';
import styles from './index.module.less';

interface SayType {
  id: string;
  content: string;
  date: string;
  avatar?: string;
}

// mock 数据
const sayList: SayType[] = [
  {
    id: '1',
    content: '😢 加油·  😢',
    date: '2024-03-18',
    avatar: 'https://picsum.photos/id/669/80/80'
  },
  {
    id: '2',
    content: '不丑一段文件夹，不丑一段代码，不丑一段人生',
    date: '2023-09-23',
    avatar: 'https://picsum.photos/id/670/80/80'
  },
  {
    id: '3',
    content: '人生得意须尽欢，莫使金樽空对月',
    date: '2023-04-04',
    avatar: 'https://picsum.photos/id/671/80/80'
  },
  {
    id: '4',
    content: '道阻且长，行则将至',
    date: '2022-06-01',
    avatar: 'https://picsum.photos/id/672/80/80'
  }
];

const Saying: React.FC = () => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>自言自语</h2>
      <div className={styles.grid}>
        {sayList.map(say => (
          <div key={say.id} className={styles.card}>
            {say.avatar && (
              <img
                src={say.avatar}
                alt="avatar"
                className={styles.avatar}
                onClick={() => say.avatar && setPreviewUrl(say.avatar)}
              />
            )}
            <div className={styles['content-wrapper']}>
              <div className={styles.content}>{say.content}</div>
              <div className={styles.date}>{say.date}</div>
            </div>
          </div>
        ))}
      </div>
      {/* 图片预览弹窗 */}
      {previewUrl && (
        <div className={styles.previewMask} onClick={() => setPreviewUrl(null)}>
          <img src={previewUrl} alt="preview" className={styles.previewImg} />
        </div>
      )}
    </div>
  );
};

export default Saying;