import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from '../h11/hw11.module.css'
import MultiRangeSlider from "./common/puper/PuperDoubleRAnge";

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    const setVal = (va: number) => {
        setValue1(va)

    }

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div className={s.sliderContein}>
                <span>{value1}</span>
                <SuperRange min={value1} onChangeRange={setVal}// сделать так чтоб value1 изменялось
                />
            </div>

            <div>

                <span>{value1}</span>
                {/*<SuperDoubleRange onChangeRange={onChangeRange}*/}
                {/*                  min={1} max={100}*/}
                {/*    // сделать так чтоб value1 и value2 изменялось*/}
                {/*/>*/}
                <MultiRangeSlider setValue1={setValue1} setValue2={setValue2} max={value2} min={value1}/>

                <span>{value2}</span>
            </div>

            <hr/>

            <hr/>
            <div>


            </div>
        </div>
    )
}

export default HW11
