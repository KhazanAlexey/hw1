import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import { fetchingAC } from './bll/loadingReducer';
import { AppStoreType } from './bll/store';
import loadpic from '../h10/Loading/1480.gif'
function HW10() {
    // useSelector, useDispatch
    const dispatch=useDispatch();
    const loading = useSelector<AppStoreType,boolean>(state=> state.loading.loading)

    const setLoading = () => {
       dispatch(fetchingAC(true))
        // setTimeout
        setTimeout(()=>{ dispatch(fetchingAC(false))},3000)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div><img src={loadpic}/></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
