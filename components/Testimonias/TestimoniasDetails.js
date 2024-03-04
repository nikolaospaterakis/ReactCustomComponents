import React from "react"
import {TestimoniasContext} from "./Testimonias"
export default function TestimoniasDetails({children}){
    const hasImg = React.useContext(TestimoniasContext)
    
    return (
        <p className={`Test-details${hasImg ? "" : "-no-image"}`}>{children}</p>
    )
}