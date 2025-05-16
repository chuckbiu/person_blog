import React from 'react';
import HomeStyle from './index.module.less';
import Aside from './Aside/Aside';
import Section from './Section/Section';
import Title from '../../components/Title/Title';

interface HomeProps {
  
}

const Home: React.FC<HomeProps> = () => {
  return   (
    <>
        <Title title="Home" />
      <div>
      <Section />
        <Aside />
      </div>
    </>
  )

}
export default Home;