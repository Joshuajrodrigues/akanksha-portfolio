import React from 'react'
import NavLink from '../link/link'

const Navmenu = () => {
  return (
    <nav className=' ml-auto max-w-32'>
    <ul className=" space-y-5 p-2">
      <li>
        <NavLink text="Projects" to="/" />
      </li>
      <li>
        <NavLink text="About" to="/"/>
      </li>
      <li>
        <NavLink text="Let's Talk" to="/"/>
      </li>
    </ul>
  </nav>
  )
}

export default Navmenu