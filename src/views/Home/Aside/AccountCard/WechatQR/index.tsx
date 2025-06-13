import React from 'react';
import { weChatQRCode } from '../../../../../utils/constant';
const WechatQR: React.FC = () => {
    return (
        <img src={weChatQRCode} alt="WeChat QR Code" style={{ width: '100px', height: '100px' }} />
    );
};

export default WechatQR;