import React from 'react';
import TableCart from './index.module.less';
import TableIcon from './Icon/Table'
import LabelIcon from './Icon/Label'
import CategoryIcon from './Icon/Category';
interface TableCardProps {
    onClick?: () => void;
    content: string;
    title: string;
}
const TableCard: React.FC<TableCardProps> = ({ content, title, onClick }) => {
    return (
        <>
            <div className={TableCart.sectionLeft} onClick={onClick}>
                <div className={TableCart.content}>
                    <div className={TableCart.title}>
                        {title}
                    </div>
                    <div className={TableCart.footer}>
                        <span className={TableCart.time}><TableIcon style={{ width: '16px', height: '16px' }}></TableIcon> 发布于  2025-01-24</span>
                        |
                        <span className={TableCart.label}><CategoryIcon style={{ width: '16px', height: '16px' }}></CategoryIcon> 标签</span>
                    </div>
                    <p className={TableCart.content}>
                        {content}
                    </p>
                    <div className={TableCart.tag}>
                     
                        <div className={TableCart.label}>
                            <div className={TableCart.labelItem}>
                                <LabelIcon style={{ width: '13px', height: '13px' }}></LabelIcon>
                                <span>WebGL</span>
                            </div>
                            <div className={TableCart.labelItem}>
                                <LabelIcon style={{ width: '13px', height: '13px' }}></LabelIcon>
                                <span>WebGL</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </>
    )
}
export default TableCard;