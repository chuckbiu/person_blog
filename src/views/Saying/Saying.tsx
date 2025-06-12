import React from 'react';
import styles from './index.module.less';
import { blogAdminUrl } from '../../utils/constant'
import Layout from '@/components/Layout/Layout'
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
  },
  {
    id: '2',
    content: '尽管事不如意，还须继续努力',
    date: '2023-09-23',
  },
  {
    id: '3',
    content: '人生得意须尽欢，莫使金樽空对月',
    date: '2023-04-04',
  },
  {
    id: '4',
    content: '道阻且长，行则将至',
    date: '2022-06-01',
  }
];
const Saying: React.FC = () => {
  return (
   <Layout
    title="自言自语"
   >
     <div className={styles.container}>
      <div className={styles.grid}>
        {sayList.map(say => (
          <div key={say.id} className={styles.card}>
            {(
              <img
                src={blogAdminUrl}
                alt="avatar"
                className={styles.avatar}
              />
            )}
            <div className={styles['content-wrapper']}>
              <div className={styles.content}>{say.content}</div>
              <div className={styles.date}>{say.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>


   </Layout>
  );
};

export default Saying;