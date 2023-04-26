import React, { Fragment } from 'react'



export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

const Input: React.FC<InputProps> = (props) => {


    return (
        <div className="flex flex-col">
            {props.label ? <label className="text-base">{props.label}</label> : null}
            <input {...props} className={`w-full mt-2 ${props.className} outline-none rounded-sm bg-stone-200 p-2`} />
        </div>
    )
}

export default Input
