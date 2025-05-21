import { Pagination } from 'antd';
import React, { useEffect, useState } from 'react';


interface Props {
    current?: number;
    defaultPageSize?: number;
    total?: number;
    setPage?: Function;
    scrollToTop?: number;
    autoScroll?: boolean;
    setNavShow?: Function;
  }
const MyPagination: React.FC<Props> = ({ current,
    defaultPageSize = 8,
    total = 0,
    setPage,
    scrollToTop = 0,
    autoScroll = false,
    setNavShow}) => {

return (
   <>
    {
        total > defaultPageSize ? (
            // showTitle 是否显示原生 tooltip 页码提示
            // showQuickJumper 是否显示快速跳转
            // showSizeChanger 是否显示切换每页条数
          <div id='MyPagination'>
              <Pagination
                current={current}
                defaultPageSize={defaultPageSize}
                total={total} 
                showSizeChanger={false}
                showTitle={false}
                onChange={(page: number) => {
                    console.log('page', page)
                }}
                />
          </div>
        ) : null
    }
   </>
)    
}
export default MyPagination;