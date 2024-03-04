import React from "react"
import {TestimoniasContext} from "./Testimonias"

export default function TestimoniasFooter({children, name, about}){
    const hasImg = React.useContext(TestimoniasContext)
    return (
        <div className={`Test-footer${hasImg ? "" : "-no-image"}`}>
            <p className="name">{name} <span className="line">/</span></p>
            <p className="footer-about">{about}</p>
        </div>
    )
}