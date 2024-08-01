import React from 'react'

const Button = ({
    children,
    buttonType='button',
    bgColor = 'bg-blue-500',
    textColor= 'text-white',
    className= "",
    ...props
}) => {
  return (
    <button
        {...props}
        type={buttonType}
        className={`py-2 px-4 ${bgColor} ${className} ${textColor}`}
    >{children}</button>
  )
}

export default Button