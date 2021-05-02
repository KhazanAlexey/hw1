import React, {useEffect, useState} from 'react'

function AlternativeClock() {
    const [time, settime] = useState<any>()
const datetoloc=new Date().toLocaleDateString()
    const tomeloc=new Date().toLocaleTimeString()
    useEffect(()=>{
        setInterval(()=>{settime(new Date().toLocaleTimeString())},1000)

    },[tomeloc])
    return (
        <div>
            <div>{time}</div>
            <div>{tomeloc}</div>
            {datetoloc}
        </div>
    )
}

export default AlternativeClock
