import React, { useEffect } from 'react';
import HomeStyle from './index.module.less';
import Aside from './Aside/Aside';
import Section from './Section/Section';
import Title from '../../components/Title/Title';
import { models } from '../../utils/cloudBase';
import { siteTitle } from '../../utils/constant'
import { getTitle } from '../../utils/apis/getTitle'
interface HomeProps {

}

const Home: React.FC<HomeProps> = () => {

  const [subTitle, setSubTitle] = React.useState<string>(''); // 副标题

  useEffect(() => {
    const fetchData = async () => {
      console.log('home');
      const { data } = await models.blog_tpl_post.list({
        getCount: true, // 是否返回总数
        envType: "prod",
      });
      // 返回查询到的数据和总数
      console.log(data);
    }
    fetchData()
    getTitle.then(res => {
      setSubTitle(res)
    })
  });
  return (
    <>
      <div className={HomeStyle.container}>
        <Title title={siteTitle} subTitle={subTitle} />
        <div className={HomeStyle.home}>
          <Section />
          <Aside />
        </div>
      </div>
    </>
  )

}
export default Home;