import React from 'react'

const Paragraph = ({children, className}:{children:string,className?:string}) => {
  return (
    <p className={`text-3xl uppercase text-blue-500 font-medium ${className}`} >{children}</p>
  )
}

export default Paragraph