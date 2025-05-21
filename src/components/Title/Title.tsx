import React from 'react'
import TitleStyle from './index.module.less'
interface TitleProps {
    title: string
    subTitle?: string
}

const Title: React.FC<TitleProps> = ({ title, subTitle }) => {
    return (
        <div className={TitleStyle.titleContainer}>
            <div className={TitleStyle.title}>{title}</div>
            {subTitle && <div className={TitleStyle.subTitle}>{subTitle}</div>}
        </div>
    )
}
export default Title;