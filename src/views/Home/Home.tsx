import React, { useEffect } from 'react';
import HomeStyle from './index.module.less';
import Aside from './Aside/Aside';
import Section from './Section/Section';
import Title from '../../components/Title/Title';
import { siteTitle } from '../../utils/constant'
import { getTitle } from '../../utils/apis/getTitle'
interface HomeProps {

}

const Home: React.FC<HomeProps> = () => {

  const [subTitle, setSubTitle] = React.useState<string>(''); // 副标题

  useEffect(() => {
    getTitle.then(res => {
      setSubTitle(res as string)
    })
  },[]);
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