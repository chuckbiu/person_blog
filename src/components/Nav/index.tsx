import React, { useEffect, useState }from 'react';

import {
    HomeOutlined
} from '@ant-design/icons';

import NavStyle from './index.module.less';
import { useLinkList } from './config';
import { NavLink, useNavigate } from 'react-router-dom';
const Nav: React.FC = () => {
    const { navArr } = useLinkList();
    const navigate = useNavigate();

    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) { // 滑到下隐藏
                setVisible(false);
            } else { // 如果没有就显示
                setVisible(true);
            }
            setLastScrollY(window.scrollY); //记住你当前的高度
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            // 清理函数
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);
    return (
        <>
            <nav className={`${NavStyle.nav} ${visible ? NavStyle.slideIn : NavStyle.slideOut}`}>
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