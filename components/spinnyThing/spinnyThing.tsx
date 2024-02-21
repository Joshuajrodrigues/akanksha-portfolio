
import css from './spinnyThing.module.scss'

export const SpinnyThing=({text}:{text:string})=>{
    return (<>
            <div id={css.spinny} data-text={text} >weeee</div>
    </>)
}