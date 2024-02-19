import Marquee from "./marquee"


export const Header=()=>{
    const name = 'AKANKSHA GAJANKAR '
    const nameArray = name.split("")
    return(
        <h1 className=" text-9xl bg-blue-800 h-screen flex justify-center items-center">
            <Marquee items={nameArray} />
        </h1>
    )
}