import React from 'react'
import s from "./Greeting.module.css"
import * as events from "events";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (events:React.ChangeEvent<HTMLInputElement>)=>void // need to fix any
    addUser: (e:React.MouseEvent)=>void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass =error? s.error: "" // need to fix with (?:)

    return (
        <div className={s.wrapper}>
            <div className={s.inputclass}><input value={name} onChange={setNameCallback} className={inputClass}/>
                <span>{error}</span></div>

            <button onClick={addUser}>add</button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
