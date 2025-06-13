import React from "react"
import PhotoCardStyles from "./index.module.less"
import { Image } from 'antd';
interface PhotoCardProps {
    url: string;
    title: string;
    desc: string;
    category: string;
}
const PhotoCard: React.FC<PhotoCardProps> = (props) => {
    return (
        <div className={PhotoCardStyles.photoCard} key={props.url}>
            <Image
                className={PhotoCardStyles.photoImg}
                src={props.url}
                alt={props.title}
                width="100%"
                height="100%"
                style={{ objectFit: 'cover' }}
                placeholder={
                    < Image
                        preview={false}
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                    />
                }
            />
            <div className={PhotoCardStyles.photoInfo}>
                <div className={PhotoCardStyles.photoTitle}>{props.title}</div>
                {props.desc && <div className={PhotoCardStyles.photoDesc}>{props.desc}</div>}
            </div>
        </div>
    )
}
export default PhotoCard;