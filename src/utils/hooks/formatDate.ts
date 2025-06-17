import dayjs from 'dayjs'
export const formatDate = (date: string | number) => {
    return dayjs(date).format('YYYY-MM-DD'); // 格式化日期
}
