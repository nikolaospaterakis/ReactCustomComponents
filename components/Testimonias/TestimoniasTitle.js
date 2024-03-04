import React from "react"
import {TestimoniasContext} from "./Testimonias"

import { GiIsland } from "react-icons/gi";

export default function TestimoniasTitle({children}){
    const hasImg = React.useContext(TestimoniasContext)
    console.log(hasImg)
    return hasImg ? (
        <h2>{children}</h2>
    ) : (
        <div className="Test-title-no-image"><GiIsland /> <p><span>Work</span>cation</p></div>
    )
}