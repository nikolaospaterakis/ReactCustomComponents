import React from "react"

const MultilineContext = React.createContext()

export default function Banner({children}){
    const messageTypes = ["success", "warning", "error", "neutral"]
    let randomNumberForMessageType = Math.floor(Math.random() * 4)
    let randomMessageType = React.useRef(messageTypes[randomNumberForMessageType] )
    const [showMultiline, setShowMultiline] = React.useState(false)
    console.log(randomMessageType)
    function showDetails(){
        setShowMultiline(preValue => !preValue)
    }
    return (
        <MultilineContext.Provider value={{showMultiline, randomMessageType}}>
            <div onClick={showDetails} className={`banner ${randomMessageType.current}`}>
                {children}
            </div>
        </MultilineContext.Provider>
    )
}

export {MultilineContext}
