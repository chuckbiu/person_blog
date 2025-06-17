import React from 'react';
import TableCart from './index.module.less';
import TableIcon from './Icon/Table'
import LabelIcon from './Icon/Label'
import CategoryIcon from './Icon/Category';
import { formatDate } from '../../../../utils/hooks/formatDate';
import TableCardLoading from './TableCardLoading/TableCardLoading';
interface TableCardProps {
    onClick?: () => void;
    content?: string;
    title?: string;
    summary?: string;
    wznr?: string;
    createBy?: string;
    updateBy?: string;
    // 修正：将 updatedAt 的类型从 number 改为 string，以匹配后端日期字符串格式
    // 如果后端也可能返回数字时间戳，则可以使用 string | number
    updatedAt?: string | number; 
    loading?: boolean; // loading 属性通常有默认值，但为了明确类型可以保留
}

const TableCard: React.FC<TableCardProps> = ({ summary, title, onClick, updatedAt, loading = true}) => {
    return (
        <>
            {
                loading ? <div className={TableCart.sectionLeft}>
                    <TableCardLoading></TableCardLoading>
                </div> : (
                    <div className={TableCart.sectionLeft} onClick={onClick}>
                        <div className={TableCart.content}>
                            <div className={TableCart.title}>
                                {title}
                            </div>
                            <div className={TableCart.footer}>
                                <span className={TableCart.time}><TableIcon style={{ width: '16px', height: '16px', marginRight: '5px' }}></TableIcon> 发布于 {updatedAt ? formatDate(updatedAt) : '未知日期'}</span>
                                <div className={TableCart.divider}></div>
                                <span className={TableCart.label}><CategoryIcon style={{ width: '16px', height: '16px', marginRight: '5px' }}></CategoryIcon> demo</span>
                            </div>
                            <p className={TableCart.content}>
                                {summary}
                            </p>
                            <div className={TableCart.tag}>

                                <div className={TableCart.label}>
                                    <div className={TableCart.labelItem}>
                                        <LabelIcon style={{ width: '13px', height: '13px' }}></LabelIcon>
                                        <span>{title == 'Python 基础语法' ? 'Python' : '前端'}</span>
                                    </div>
                                    {/* <div className={TableCart.labelItem}>
                                        <LabelIcon style={{ width: '13px', height: '13px' }}></LabelIcon>
                                        <span>WebGL</span>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                )
            }
        </>
    )
}
export default TableCard;