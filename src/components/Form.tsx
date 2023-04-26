import React from 'react'

type FormProps = React.FormHTMLAttributes<HTMLFormElement>

const Form: React.FC<FormProps> = (props) => {
    return <form {...props}>{props.children}</form>
}

export default Form
