
import React from 'react';

import PageTitle from '../PageTitle';
import s from './index.module.less';

interface Props {
  title?: string;
  className?: string;
  setNavShow?: Function;
  loading?: boolean;
  isPost?: boolean;
  classes?: string;
  date?: number;
  rows?: number;
}

const Layout: React.FC<Props> = ({
  title,
  className,
  setNavShow,
  loading,
  children,
  classes,
  date,
  isPost = false,
  rows
}) => {


  return (
    <>
      {
        title?.length > 0 ? <PageTitle title={title} >
        </PageTitle> : <div style={{ height: '80px' }}></div>
      }
      <div className={s.content}>{children}</div>
    </>
  );
};

export default Layout;