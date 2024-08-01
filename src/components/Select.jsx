import React, {useId} from 'react'

const Select = ({
    label,
    options =[],
    className="",
    ...props
}, ref) => {
    const id = useId()
  return (
    <div>
        {label && <lablel htmlFor={id}>{label}</lablel>}
        <select
        {...props}
        ref={ref}
        className={`${className}`} 
        id={id}>
            {options?.map((option)=> (
                <option key={option} value={option}>{option}</option>
            ))}
        </select>
    </div>
  )
}

export default React.forwardRef(Select)