import React, { useState } from "react";
import { Card, Divider, Switch } from "antd";
import styles from "./index.module.less";
import AboutMe from "./AboutMe/AboutMe";
import AboutSite from "./AboutSite/AboutSite";
import Layout from "../../components/Layout/Layout";

const About: React.FC = () => {
  const [showMe, setShowMe] = useState(false);
  return (
    <Layout title={'关于自己'}>
      <div className={styles.container}>
        <div className={styles.switchRow}>
          <Switch checked={showMe} onChange={setShowMe} />
          <span className={styles.switchLabel}>{showMe ? "关于我" : "关于本站"}</span>
        </div>
        <Card bordered={false}>
          {showMe ? <AboutMe /> : <AboutSite />}
          <Divider />
        </Card>
      </div>
    </Layout>
  );
};

export default About;