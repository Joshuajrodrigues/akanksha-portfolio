import React, { ReactNode } from 'react'

const Accent = ({children}:{children:ReactNode}) => {
  return (
    <strong className=' font-semibold text-lightPrimary'>{children}</strong>
  )
}

export default Accent