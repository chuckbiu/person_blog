import React from 'react';
import TableCart from './index.module.less';
interface TableCardProps {
    onClick?: () => void;
    content: string;
    title: string;
}
const TableCard: React.FC<TableCardProps> = ({ content, title, onClick }) => {
    return (
        <>
             <div className={TableCart.sectionLeft} onClick={onClick}>
                <div className={TableCart.title}>
                   {title}
                </div>
                <p className={TableCart.content}>
                    {content}
                </p>
                <div className={TableCart.footer}>
                    <span className={TableCart.time}>2025-01-24</span>
                    <div className={TableCart.tag}>
                        <span className={TableCart.tagItem}>模块化</span>
                        <span  className={TableCart.tagItem}>前端</span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TableCard;