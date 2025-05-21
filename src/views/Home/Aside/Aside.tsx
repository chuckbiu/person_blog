import React from "react";
import AsideStyle from './index.module.less'
interface AsideProps {


}
const Aside: React.FC<AsideProps> = ({ }) => {


    return (
        <>
            <aside className={AsideStyle.aside}>
                <h2>Aside</h2>
            </aside>
        </>
    )
}
export default Aside;