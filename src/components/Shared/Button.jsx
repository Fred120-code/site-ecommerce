import React from 'react'

const Button = ({text, bgColor, 
    textColor, handler = () => {}}) => {
  return (
    <button className={`${bgColor} ${textColor} cursor-pointer hover:`}>
         {text}
    </button>
  )
}

export default Button