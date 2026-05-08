import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({
  children,
  href = '#',
  className = '',
  ...props
}) => {
  const baseClasses = 'w-full min-h-[40px] text-[14px] font-[700] text-white rounded-[12px] bg-[#FF9600] flex items-center justify-center gap-[5px]'
  const classes = `${baseClasses} ${className}`

  return (
    <Link to={href} className={classes} {...props}>
      {children}
    </Link>
  )
}

export default Button
