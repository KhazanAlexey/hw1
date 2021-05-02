import React, {useEffect, useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from "./clock.module.css"
function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>()
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        console.log(id)
        setTimerId(id)
    }
    const stringTime =date?.toLocaleTimeString()// fix with date

    const onMouseEnter = () => {

        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)

    }

    const stringDate = date?.toLocaleDateString()
// fix with date

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>


                <div className={s.dat}>
                    {show && stringDate}
                </div>


            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
