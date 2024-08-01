import React, {useId} from 'react'

const Input = React.forwardRef(({
    label,
    type ="text",
    className="",    
    ...props

}, ref) => {
    const id = useId()
    return (
        <div>
            {label && <label htmlFor={id}>{label}</label>}
            <input 
            {...props}
            type={type} 
            ref={ref}
            id={id}
            className= {`w-full ${className}`} />
        </div>
    )
})

export default Input