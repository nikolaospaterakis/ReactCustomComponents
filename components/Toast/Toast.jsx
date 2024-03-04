import React from "react"

const ToastContext = React.createContext()

export default function Toast({children}){
    
    const messageTypes = ["success", "warning", "error", "neutral"]
    let randomNumberForMessageType = Math.floor(Math.random() * 4)
    let randomMessageType = React.useRef(messageTypes[randomNumberForMessageType])
    
    return (
        <ToastContext.Provider value={randomMessageType.current}>
            {children}
        </ToastContext.Provider>
    )
}

export {ToastContext}