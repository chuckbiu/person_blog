import React from 'react';
import HomeStyle from './index.module.less';
import Aside from './Aside/Aside';
import Section from './Section/Section';
import Title from '../../components/Title/Title';

interface HomeProps {

}

const Home: React.FC<HomeProps> = () => {
  return (
    <>
     <div className={HomeStyle.container}>
     <Title title="Home" subTitle='Welcome to my blog' />
      <div className={HomeStyle.home}>
        <Section />
        <Aside />
      </div>
     </div>
    </>
  )

}
export default Home;