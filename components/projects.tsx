import React from 'react'
import ProjectCard from './projectCard'

const Projects = () => {
  return (
    <div className='  h-svh'>
        <ProjectCard/>
        <div className=' w-full flex justify-center my-12'>

        <button className=" border border-blue-600 text-blue-600 rounded-full py-2 px-4">
          MORE PROJECTS
        </button>
        </div>
    </div>
  )
}

export default Projects