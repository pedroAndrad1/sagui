import { ReactNode } from "react";

export default function Container({children}){
    return (
        <div className="container">
            {children}
        </div>
    )
}