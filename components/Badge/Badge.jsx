import React from "react"

export default function Badge({children, value}){
    const {randomShape, randomColor} = value
    return (
        <p className={`Badge ${randomShape} ${randomColor}`}>
            {children}
        </p>
    )
}