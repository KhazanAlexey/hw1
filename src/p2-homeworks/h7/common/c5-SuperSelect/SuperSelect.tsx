import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import s from "../c5-SuperSelect/superselect.module.css"
type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: string[]
    onChangeOption?: (option: string) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
let mappedOptions
    if (options){
         mappedOptions =
            options?.map((o,key)=><option className={s.option} key={key} value={o} >{o}</option> ); // map options with key
    }

const selectClassname=s.select


    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange&&onChange(e)

        // onChange, onChangeOption
        onChangeOption&&onChangeOption(e.currentTarget.value)
    }

    return (
        <select className={selectClassname} onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
