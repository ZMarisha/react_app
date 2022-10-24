import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {

    const nav = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            nav('/profile')
        }, 1000)
    })

    return (
        <div>
            <h1>404 Not Found Page</h1>
        </div>
    )
}

export default NotFound;