import React from "react"
import {MultilineContext} from "./Banner"
import { MdCancel } from "react-icons/md";
import { IoMdWarning, IoIosCheckmarkCircle } from "react-icons/io";
import { BsFillInfoCircleFill } from "react-icons/bs";

export default function BannerTitle({children}){
    const {randomMessageType} = React.useContext(MultilineContext)
    return (
        randomMessageType.current === "success" 
        ? <p> <IoIosCheckmarkCircle/> <span>Congratulations!</span> </p>
        : (
            randomMessageType.current === "error" ? (
                <p> <MdCancel />  <span>There is a problem with your application</span>  </p>
            )
            : (
                randomMessageType.current === "warning" 
                ? <p> <IoMdWarning /> <span>Attention</span></p> 
                : (
                    randomMessageType.current === "neutral" 
                    ? (
                        <p>
                            <BsFillInfoCircleFill /> <span>Update available</span>
                        </p>
                    ) : null
                )
            )
        )
    )
}