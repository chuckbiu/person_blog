import React from "react";
import Showstyles from "./index.module.less"; // 导入样式

const Show = () => {
    const [composition, setComposition] = React.useState([{
        id: 1, title: "作品1", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80", description: "这是一个描述"
    }, {
        id: 2,
        title: "作品2",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        description: "这是一个描述"


    },
    {
        id: 3,
        title: "作品3",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        description: "这是一个描述"


    },
    {
        id: 4,
        title: "作品4",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        description: "这是一个描述"

    }
    ])

    return (
        <div className={Showstyles.container}>
            <h1 >作品展示页面</h1>

            <div className={Showstyles.imageGallery}>
                {composition?.map((image) => (
                    <div key={image.id} className={Showstyles.imageContainer} style={{ backgroundImage: `url(${image.image})` }}>
                        <div className={Showstyles.content}>
                            <p className={Showstyles.description}>
                                <span className={Showstyles.title}>{image.title}</span>
                            </p>
                            <div className={Showstyles.overlay}>
                                <p>{image.description}</p>
                            </div>
                        </div>
                    </div>
                ))
                }


            </div>
        </div>
    );
};

export default Show;