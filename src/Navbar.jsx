import React from "react";
import { Link, NavLink } from "react-router-dom";


const Navbar = (() => {

    return (
        <div>
            <nav className="flex justify-between bb b--black-10">
                <Link className="f6 link dib black dim mr3 mr4-ns" to='/'>Főoldal</Link>
                <NavLink className="f6 link dib black dim mr3 mr4-ns" to='/ermesek'>Az olimpia érmesei</NavLink>
                <NavLink className="f6 link dib black dim mr3 mr4-ns" to='/mermesek'>A magyar érmesek</NavLink>
            </nav>

        </div>
    )

}
)
export default Navbar