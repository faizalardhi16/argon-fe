import React from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    color?: string;
}


const Button: React.FC<ButtonProps> = (props) => {

    if (props.color === "primary") {
        return <button {...props} className={`bg-[#2980b9] px-4 py-2 text-white rounded-md ${props.className}`}>{props.children}</button>
    } else if (props.color === "success") {
        return <button {...props} className={`bg-[#16a085] px-4 py-2 text-white rounded-md ${props.className}`}>{props.children}</button>
    } else if (props.color === "danger") {
        return <button {...props} className={`bg-[#d35400] px-4 py-2 text-white rounded-md ${props.className}`}>{props.children}</button>
    }

    return <button {...props} className={`bg-[#c0392b] px-4 py-2 text-white rounded-md ${props.className}`}>{props.children}</button>
}

export default Button
