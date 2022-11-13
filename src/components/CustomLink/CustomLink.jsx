import React from "react";
import { useMatch, Link } from "react-router-dom";
 
const CustomLink = ({children, to}) => {

    const match = useMatch({
        path: to,
        end: to.length === 1,
    });

    return (
        <Link to={to} style={{color: match ? 'black' : 'white'}}>{children}</Link>
    )
};

export default CustomLink;