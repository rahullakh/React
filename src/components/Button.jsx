import React from 'react'

const Button = ({text,className=""}) => {
   
    
  return (
    <div className={` ${className} bg-zinc-500 px-3 py-1 rounded-lg text-white`}>
     {
      text.toLocaleUpperCase()
     }
    
    </div>
  )
}

export default Button


