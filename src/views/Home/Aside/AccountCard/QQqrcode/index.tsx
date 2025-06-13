import React from 'react';
import { QQ_QRCode } from '../../../../../utils/constant';
const QQqrcode: React.FC = () => {
    return (
        <img src={QQ_QRCode} alt="WeChat QR Code" style={{ width: '100px', height: '100px' }} />
    );
};

export default QQqrcode;