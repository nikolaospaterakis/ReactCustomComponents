import React from "react"
import {ToastContext} from "./Toast"
import { MdCancel } from "react-icons/md";
import { IoMdWarning, IoIosCheckmarkCircle } from "react-icons/io";
import { BsFillInfoCircleFill } from "react-icons/bs";

export default function ToastDetails({children = null}) {
    const randomMessageType = React.useContext(ToastContext)
    const icon = randomMessageType === "success" ? <IoIosCheckmarkCircle /> : (
        randomMessageType === "error" ? <MdCancel /> : (
            randomMessageType === "warning" ? <IoMdWarning /> : <BsFillInfoCircleFill />
        )
    )
    const description = randomMessageType === "success" ? "Your work has been saved" : (
        randomMessageType === "error" ? "Please re-save your work again" : (
            randomMessageType === "warning" 
            ? "A network error was detected" : "Please read updated information"
        )
    )
    
    return (
        <div className={`Toast-${randomMessageType}`}>
            <span>{icon}</span>
            <h3>{randomMessageType[0].toUpperCase() + randomMessageType.slice(1)}</h3>
            <p>{description}</p>
        </div>
    )
}