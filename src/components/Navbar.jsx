import { NavLink } from "react-router-dom"
export default function Navbar()
{
    return(
        <>
            <nav>
                <div className="logo">
                    <h1>TRAVELLER</h1>
                </div>
                <div className="navbar-list">
                    <NavLink className="item" to="/">Home</NavLink>    
                    <NavLink className="item" to="/faqs">FAQ</NavLink>    
                    <NavLink className="item" to="/contact">Contact</NavLink>    
                    <NavLink to="/auth/login"><button>Log in</button></NavLink>
                </div>
            </nav>
        </>
    )
}