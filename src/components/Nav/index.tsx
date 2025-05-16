import React from 'react';

import {
    BgColorsOutlined,
    CheckOutlined,
    HeatMapOutlined,
    MenuOutlined,
    SettingOutlined
  } from '@ant-design/icons';
  
import NavStyle from './index.module.less';
import { useLinkList } from './config';
const Nav: React.FC = () => {
    const { navArr, secondNavArr, mobileNavArr } = useLinkList();

    return (
        <>
        <nav className={NavStyle.nav}>
            <div className={NavStyle.home}>
                {/* 首页 */}
                <div className={NavStyle.homeIcon}>
            <HeatMapOutlined />           
                    </div>
            </div>
            <div className={NavStyle.navList}>
                {/* 其他按钮 */}
                {
                  navArr.map((item, index) => (
                    <div
                    key={index}
                    className={NavStyle.navItem}
                    >
                    {item.name}
                    </div>
                ))
                }
            </div>
        </nav>
        </>

    )
}
export default Nav