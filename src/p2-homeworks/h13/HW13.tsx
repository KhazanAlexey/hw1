import React, {ChangeEvent, useEffect, useState} from "react";
import {useDispatch, useSelector} from 'react-redux'


import s from "./HW12.module.css";
import {api} from "./utils/Api";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

function HW13() {
    // useDispatch, onChangeCallback
    const [resp, setResp] = useState<any>()
    const [err, seterr] = useState<any>()
    const [success, setsucces] = useState<boolean>(true)

    async function postT() {
        try {
            const res = await api.postTest(success)
            setResp(res.statusText)
            seterr(null)
        } catch (e) {
            seterr(e)
        }
    }


    const togglesuckecc = (e: ChangeEvent<HTMLInputElement>) => {
        setsucces(e.currentTarget.checked)

    }
    const send = () => {
        postT()
    }

    return (
        <div>
            <hr/>
            homeworks 13
            <hr/>

            <SuperCheckbox onChange={togglesuckecc}>Success</SuperCheckbox>
            <SuperButton onClick={send}>Send</SuperButton>
            <div>Responce:{JSON.stringify(resp)}
            </div>
            <div>Error:{JSON.stringify(err)}</div>
            <div>success:{JSON.stringify(success)}</div>
        </div>

    );
}

export default HW13;
