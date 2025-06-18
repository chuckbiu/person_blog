import React from "react";
import Showstyles from "./index.module.less"; // 导入样式
import Layout from "../../components/Layout/Layout";

const Show = () => {
    const [composition, setComposition] = React.useState([{
        id: 1, title: "Vue3 组件库", image: "https://img.picui.cn/free/2025/06/13/684bd13ab4f55.png", description: "优雅而强大的 Vue 3 组件库为开发者打造的下一代组件库", link: 'http://139.9.177.45:3444/'
    }, {
        id: 2,
        title: "后端渲染Nuxt 网站",
        image: "https://img.picui.cn/free/2025/06/15/684e94ac8cded.png",
        description: "使用nuxt.js 构建后端渲染的网站",
        link: 'https://github.com/chuckbiu/oppo-web-nuxt'
    },
    {
        id: 3,
        title: "前台模板项目",
        image: "https://img.picui.cn/free/2025/06/18/68529518a99d5.png",
        link: "http://43.136.232.43:30086/YangHai/vue-front-template",
        description: "简化前端开发流程 常用函数封装 脚手架封装"
    },
    {
        id: 4,
        title: "学校服务小程序 比赛作品",
        image: "https://img.picui.cn/free/2025/06/18/685295d18178b.png",
        link: "https://github.com/chuckbiu/XiaoCxApril.git",
        description: "Uniapp 框架开发的小程序 展示多种学校服务"
    }
    ])
    return (
        <Layout title={'作品展示'}>
            <div className={Showstyles.imageGallery}>
                {composition?.map((image) => (
                    <a key={image.id} href={image.link} target="_blank" className={Showstyles.imageContainer} style={{ backgroundImage: `url(${image.image})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>

                        <div className={Showstyles.content}>
                            <p className={Showstyles.description}>
                                <span className={Showstyles.title}>{image.title}</span>
                            </p>
                            <div className={Showstyles.overlay}>
                                <p>{image.description}</p>
                            </div>
                        </div>
                        <div className={Showstyles.overlaygrey}>

                        </div>
                    </a>
                ))
                }
            </div>
        </Layout>
    );
};

export default Show;