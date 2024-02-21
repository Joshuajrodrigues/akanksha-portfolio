import Marquee from "./marquee"
import { SpinnyThing } from "./spinnyThing/spinnyThing"


export const Header=()=>{
    const name = ' AKANKSHA GAJANKAR '
    const nameArray = name.split("")
    return(
        <h1 className="  bg-blue-900 h-screen flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center flex-1 mt-8">
                <strong>Akanksha Gajankar</strong>
                <em>&quot;Simplicity is the ultimate sophistication.&quot;</em>
            </div>
            <SpinnyThing text="BESTEST BOO EVEA" />
            <div className="h-full flex-2 flex justify-center items-center">
            <Marquee items={nameArray} />
            </div>
            <div className="flex-2  flex justify-center items-start h-full w-full font-bold text-center">
      
            <nav>
                <ul>
                    <li>
                        akankshagajankar@gmail.com
                    </li>
                    <li>
                        UX/UI Designer
                    </li>
                    <li>
                        Based in Goa, India
                    </li>
                </ul>
            </nav>
            </div>
        </h1>
    )
}