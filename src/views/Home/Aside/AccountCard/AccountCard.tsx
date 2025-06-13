import React, { useState} from 'react';
import s from './index.module.less';
import Github from './Github';
import Juejin from './Juejin';
import Wechat from './Wechat';
import QQ from './QQ';
import WechatQR from './WechatQR';
import QQLR from './QQqrcode';


const AccountCard: React.FC = () => {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    return (
        <div className={s.accountCard}>
            <div className={s.accountCardItem}>
                <Github />
            </div>
            <div className={s.accountCardItem}>
                <Juejin juejinStyle={{ height: '22px' }} />
            </div>
            <div className={s.accountCardItem}    onMouseEnter={() => setHoveredItem('wechat')}
                onMouseLeave={() => setHoveredItem(null)}>
                <Wechat />
                {hoveredItem === 'wechat' && (
                    <div className={s.qrCodeContainer}>
                        <WechatQR />
                    </div>
                )}
            </div>
            <div className={s.accountCardItem}  onMouseEnter={() => setHoveredItem('qq')}
                onMouseLeave={() => setHoveredItem(null)}>
                <QQ />
                {hoveredItem === 'qq' && (
                    <div className={s.qrCodeContainer}>
                        <QQLR />
                    </div>
                )}
            </div>
        </div>
    )
}

export default AccountCard;