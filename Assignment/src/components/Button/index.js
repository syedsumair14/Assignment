import React from 'react'

const Button = (props) => {
    return (
        <button onClick={props.type === "cancel" ? props.cancelForm : props.submitForm} type={props.type} className={`btn mt-1 ml-1 ${props.type === "cancel" ? `btn-danger` : `btn-success`} btn-sm`}>{props.title}</button>
    )
}

export default Button