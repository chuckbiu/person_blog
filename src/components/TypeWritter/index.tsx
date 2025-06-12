import Typewriter from 'typewriter-effect';
import React from 'react';
import s from './index.module.less';
interface IProps {
    subTitle: string
}

const TypewriterCom: React.FC<IProps> = ({ subTitle }) => {
    return (
        <>
            <div className={s.typewriter}>
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString(subTitle)
                            .callFunction(() => {
                                console.log('String typed out!');
                            })
                            .pauseFor(2500)
                            .deleteChars(10)
                            .callFunction(() => {
                                console.log('All strings were deleted');
                            })
                            .start();
                    }
                    } options={{
                        loop: true,
                        delay: 100,
                    }}
                />
            </div>
        </>
    )
}
export default TypewriterCom;