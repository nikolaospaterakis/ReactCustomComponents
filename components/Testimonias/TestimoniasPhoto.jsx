import React from "react"

export default function TestimoniasPhoto({children, img}){
    const styles = {
        backgroundImage: `url(${img})`
    }
    return img ? (
        <div style={styles} className="profile-pic"></div>
    ) : null
}