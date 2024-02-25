import Image from "next/image";
import React from "react";
import img from "@/public/colage.jpg";
import cd from '@/public/cd.jpg'
import Paragraph from "./paragraph";
const ProjectCard = () => {
  return (
    <>
    
    <div className="grid grid-cols-[1fr,2fr]">
      <div className="flex flex-col justify-center items-start text-left bg-blue-600 text-white">
        <h4 className=" text-4xl underline p-5">SOLAR GAMSUNG VOL7 BOOKLET</h4>
        <Paragraph className=" text-white p-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
          numquam sed voluptate, cum similique quas dolor provident aut
          reprehenderit voluptatibus, accusantium excepturi suscipit dicta vero!
        </Paragraph>
        <div className="p-5">

        <button className=" border border-white rounded-full py-2 px-4">
        VIEW PROJECT
        </button>
        </div>
      </div>
      <div className=" flex items-center justify-center">
        <Image
          src={img}
          objectFit="cover"
          className=" w-full h-svh object-cover"
          alt="collage"
          placeholder="blur"
        />
      </div>
    </div>
    <div className="grid grid-cols-[1fr,2fr]">
      <div className="flex flex-col justify-center items-start text-left bg-white text-blue-600">
        <h4 className=" text-4xl underline p-5">SOLAR GAMSUNG VOL7 BOOKLET</h4>
        <Paragraph className=" text-blue-600 p-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
          numquam sed voluptate, cum similique quas dolor provident aut
          reprehenderit voluptatibus, accusantium excepturi suscipit dicta vero!
        </Paragraph>
        <div className="p-5">

        <button className=" border border-blue-600 rounded-full py-2 px-4">
        VIEW PROJECT
        </button>
        </div>
      </div>
      <div className=" flex items-center justify-center">
        <Image
          src={cd}
          objectFit="cover"
          className=" w-full h-svh object-cover"
          alt="collage"
          placeholder="blur"
        />
      </div>
    </div>
    </>
  );
};

export default ProjectCard;
