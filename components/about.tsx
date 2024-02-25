import React from 'react'
import Paragraph from './paragraph'
import Image from 'next/image'
import img from "@/public/evening-sky.png";
const About = () => {
  return (
  
          <div className="grid grid-cols-2 ">
            <div className="grid grid-cols-2">
              <Paragraph className="col-span-2 text-balance p-4">
                im an experienced ui ux designer & art director passionate about
                crafting creative digital experiences.
              </Paragraph>
              <div></div>
              <Paragraph className="text-balance p-4">
                im a ui ux designer & art director passionate about crafting
                creative digital experiences.
              </Paragraph>
            </div>
            <Image src={img} alt="evening sky" placeholder="blur" />
          </div>

  )
}

export default About