import React from "react"

const TestimoniasContext = React.createContext()

export default function Testimoniass({children, img}){
    const hasImg = img ? true : false
    return (
        <TestimoniasContext.Provider value={hasImg}>
            <div className={`Testimonias${hasImg ? "" : "-no-image"}`}>
                {children}
            </div>
        </TestimoniasContext.Provider>
    )
}

export {TestimoniasContext}