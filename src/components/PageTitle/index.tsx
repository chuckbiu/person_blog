import classNames from 'classnames';
import React from 'react';

import s from './index.module.less';

interface Props {
    title?: string;
    desc?: string;
    className?: string;
    children?: React.ReactNode;
}

const PageTitle: React.FC<Props> = ({ title, desc, className, children }) => {
    return (
        <div className={classNames(s.box, className)}>
            <div className={s.title}>{title}</div>
            {desc && <div className={s.desc}>{desc}</div>}
            {children}
        </div>
    );
};

export default PageTitle;