import React from 'react'
import style from './Message.module.scss'

type propsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: propsType) {
    return (
        <div className={style.messageWrapper}>


            <div className={style.avatarblock}>
                <div style={{
                    backgroundImage: `url(${props.avatar})`,
                    backgroundRepeat: 'no-repeat',
                    position: `relative`,
                }}>

                </div>
            </div>
            <div className={style.textWrapper}>
                <div className={style.message}>
                    <h5>{props.name}</h5>
                    <div className={style.text}>
                        {props.message}
                        <span>{props.time}</span>
                    </div>
                </div>


            </div>


        </div>
    )
}

export default Message
