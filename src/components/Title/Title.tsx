import React from 'react'

interface TitleProps {
    title: string
    subTitle?: string
}

const Title: React.FC<TitleProps> = ({ title, subTitle }) => {
    return (
        <div className="title">
            <h1>{title}</h1>
            {subTitle && <h2>{subTitle}</h2>}
        </div>
    )
}
export default Title;