import React from "react";
import FooterStyle from './index.module.less'
import { icp_no,} from '../../utils/constant';

const Footer: React.FC = () => {
    return (
       <footer className={FooterStyle.footer}>
            <span>
                @2025 手札小站 
            </span>
            <span>
                | 
            </span>
            <a href="https://beian.miit.gov.cn/" className={FooterStyle.yuming} target="_blank">
                { icp_no ? `备案号：${icp_no}` : '正在备案中...'}
            </a>
        </footer> 
    )
}
export default Footer;