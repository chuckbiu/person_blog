import { models } from '../cloudBase';

export const fetchData = async () => {
    const { data } = await models.photo.list({
    //   filter: {
    //     // 查询条件

    //   },
      getCount: true, // 是否返回总数
      envType: "prod",
    });
    // 返回查询到的数据和总数
    console.log(data);
  }