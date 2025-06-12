import React from 'react'
import TitleStyle from './index.module.less'
import TypewriterCom from '../TypeWritter'
interface TitleProps {
    title: string
    subTitle?: string
}

const Title: React.FC<TitleProps> = ({ title, subTitle }) => {
    return (
        <div className={TitleStyle.titleContainer}>
            <div className={TitleStyle.title}>{title}</div>
            {subTitle && <TypewriterCom subTitle={subTitle as string}></TypewriterCom>}
        </div>
    )
}
export default Title;