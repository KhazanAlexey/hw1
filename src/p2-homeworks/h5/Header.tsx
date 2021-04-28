import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from './Routes'
import s from './pages/Header.module.css'

function Header() {
    return (
        <div className={s.mySidenav}>


            <div><NavLink className={s.prejunior} to={PATH.PRE_JUNIOR}>PreJunior</NavLink></div>
            <div><NavLink className={s.junior} to={PATH.JUNIOR}>Junior</NavLink></div>
            <div><NavLink className={s.juniorplus} to={PATH.JUNIORPLUS}>Junior+</NavLink></div>


        </div>
    )
}

export default Header


