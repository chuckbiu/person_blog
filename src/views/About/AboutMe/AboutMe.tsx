import React from "react";
import styles from "./index.module.less";
import { UserOutlined } from "@ant-design/icons";

import { Divider, Typography } from "antd";

const { Paragraph, Text } = Typography;


const AboutMe: React.FC = () => (
    <div className={styles.section}>
      <Divider orientation="left"><b><UserOutlined /> 关于我</b></Divider>
      <Paragraph>
        <Text strong>昵称：</Text>chuck<br />
        <Text strong>职业：</Text>大三在校生<br />
        <Text strong>技术栈：</Text>React / Vue / TypeScript / Node.js / ...<br />
        <Text strong>个人简介：</Text>热爱前端，喜欢钻研新技术，乐于分享和交流。<br />
        <Text strong>联系方式：</Text>zhangsan@example.com
      </Paragraph>
      <Paragraph>
        <Text>这是我自己写的个人博客，感谢你在茫茫互联网中找到了这里～
  
  请多多指教！欢迎通过邮箱或评论区与我交流！</Text>
      </Paragraph>
    </div>
  );

export default AboutMe;