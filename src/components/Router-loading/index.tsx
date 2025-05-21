// 路由加载状态页面
import React from 'react';
import { Spin } from 'antd';
import styles from './index.module.less';

const RouterLoading: React.FC = () => {
  return (
    <div className={styles.loadingContainer}>
      <Spin size="large" tip="页面加载中..." fullscreen/>
    </div>
  )
}

export default RouterLoading;
