import React from 'react'

type TextProps = React.HTMLAttributes<HTMLParagraphElement>

const Text: React.FC<TextProps> = (props) => {
    return <p {...props}>{props.children}</p>
}


export default Text
