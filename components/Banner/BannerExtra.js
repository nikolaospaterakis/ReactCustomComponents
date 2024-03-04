import React from "react"
import {MultilineContext} from "./Banner"


export default function BannerExtra({children}){
    const {showMultiline} = React.useContext(MultilineContext)
    return (
        showMultiline ? (
            <div className="details">
                {children}
            </div>
        ) : null
    )
}