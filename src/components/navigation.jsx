import React from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import "../css/navigate.css"

export default function Navigation() 
{
    const navigate = useNavigate();
    const location = useLocation();

    function nextLocation() {
        const currentPath = location.pathname;
        switch (currentPath) {
            case "/terms": 
                return "/level";
            case "/level": 
                return "/category";
            case "/category":
                return "/";
            default:
                return 1;
        }
    }
    return (
        <div>
            <nav>
            <ul>
                {location.pathname !== "/" && (
                    <button onClick={setActivePage('MemberAccount')} value="Back" className="btn-link" id="GoBack">Previous</button>
                )}
                {location.pathname !== "/" && (
                    <Link to={nextLocation()}><button value="Forward" className="btn-link" id="GoForward">Next</button></Link>
                    // <button onClick={} value="Forward" className="btn-link" id="GoForward">Next</button>
                )}
            </ul>
            </nav>
        </div>
    );
};
