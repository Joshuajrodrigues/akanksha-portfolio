import Marquee from "./marquee"


export const Header=()=>{
    const name = 'AKANKSHA GAJANKAR '
    const nameArray = name.split("")
    return(
        <h1 className=" text-[{
            font-size: 24rem;
            line-height: 1;
        }] bg-blue-900 h-screen flex flex-col justify-center items-center">
            <div className="h-full flex-3 flex justify-center items-center">
            <Marquee items={nameArray} />
            </div>
            <div className="flex-1 flex justify-start items-end h-full w-full text-8xl">
            <button className="m-2">Boo</button>
           
            </div>
        </h1>
    )
}