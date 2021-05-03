import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, useCallback, useRef} from 'react'
import s from "./superDoubleRange.module.css"
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    min:number
    max:number
    // min, max, step, disable, ...
} & DefaultInputPropsType

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange,
        className,
min,max,
        // все остальные пропсы попадут в объект restProps
        onChangeRange, value,
        ...restProps
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки
    const minValRef = useRef(min);
    const maxValRef = useRef(max);
    const range = useRef(null);
    const getPercent = useCallback(
        value => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
    );
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e) // сохраняем старую функциональность
        const valuemin = Math.min(Number(+e.currentTarget.value), max - 1)
        const valuemax = Math.min(Number(+e.currentTarget.value), min + 1)
        onChangeRange && onChangeRange([+e.currentTarget.value, +e.currentTarget.value])
    }


    return (
        <>
            <input
                type={'range'}
                onChange={onChangeCallback}
                min={min}
                max={max}
                className={s.thumbthumbLeft}
                {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
            />
            <input
                type={'range'}
                onChange={onChangeCallback}
                min={min}
                max={max}
                className={s.thumbthumbRight}
                {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
            />

        </>
    )
}

export default SuperDoubleRange
