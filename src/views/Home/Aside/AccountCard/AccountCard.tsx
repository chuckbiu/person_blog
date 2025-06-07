import React from 'react';
import s from './index.module.less';
import Github from './Github';
import Juejin from './Juejin';
import Wechat from './Wechat';
import QQ from './QQ';


const AccountCard: React.FC = () => {

    return (
        <div className={s.accountCard}>
            <div className={s.accountCardItem}>
                <Github />
            </div>
            <div className={s.accountCardItem}>
                <Juejin juejinStyle={{ height: '30px' }} />
            </div>
            <div className={s.accountCardItem}>
                <Wechat />
            </div>
            <div className={s.accountCardItem}>
                <QQ />
            </div>
        </div>
    )
}

export default AccountCard;