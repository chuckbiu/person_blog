import React from "react";
import FooterStyle from './index.module.less'
import { icp_no,} from '../../utils/constant';

const Footer: React.FC = () => {
    return (
       <footer className={FooterStyle.footer}>
            <span>
                @2023-2025 个人博客
            </span>
            <span>
                { icp_no ? `备案号：${icp_no}` : ''}
            </span>
        </footer> 
    )
}
export default Footer;