import React from 'react'
const navItems =["(HOME)","(PROJECTS)","(ABOUT)","(CONTACT)"]
const Navbar = () => {
  return (
    <nav className=" text-blue-500 text-4xl font-bold">
    <ul className="flex justify-around mt-8 ">
      {
        navItems.map((item)=>(

          <li key={item}>{item}</li>
        ))
      }
    </ul>
  </nav>
  )
}

export default Navbar