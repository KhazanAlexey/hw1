import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from 'react-redux'
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeAC} from "./bll/themeReducer";

const themes = ['dark', 'red', 'green','malina','rb'];

function HW12() {
    const dispatch = useDispatch()
    // useDispatch, onChangeCallback
const ChangeThemeCB=(them:string)=>{
        dispatch(changeThemeAC(them))
}

    const theme=useSelector<AppStoreType,string>(state => state.theme.theme)

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
            <SuperSelect options={themes} onChangeOption={ChangeThemeCB}/>

        </div>
    );
}

export default HW12;
