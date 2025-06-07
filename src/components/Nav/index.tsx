import React from 'react';

import {
    HomeOutlined
} from '@ant-design/icons';

import NavStyle from './index.module.less';
import { useLinkList } from './config';
import { NavLink, useNavigate } from 'react-router-dom';
const Nav: React.FC = () => {
    const { navArr } = useLinkList();
    const navigate = useNavigate();
    return (
        <>
            <nav className={NavStyle.nav}>
                <div className={NavStyle.home}>
                    {/* 首页 */}
                    <div className={NavStyle.homeIcon} onClick={() => {
                        navigate('/');
                    }}>
                        <HomeOutlined />
                    </div>
                </div>
                <div className={NavStyle.navList}>
                    {/* 其他按钮 */}
                                {
                        navArr.map((item, index) => (
                            <NavLink
                                key={index}
                                to={item.to}

                                className={({ isActive }) => (isActive ? NavStyle.navItemActive : NavStyle.navItem )}
                            >
                                {item.name}
                            </NavLink>
                        ))
                    }
                </div>
            </nav>
        </>

    )
}
export default Nav