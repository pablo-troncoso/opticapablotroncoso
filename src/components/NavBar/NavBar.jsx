//comienza en mayúscula: PascalCase
// se exporta
// importarlo en App
import NavLink from "../NavLink/NavLink";
import "./navbar.css"
export default function NavBar() {

   
    return (
        <nav className="nav-main">
            <ul className = "nav-list">
                <NavLink />
                <NavLink />
                <NavLink />
                <NavLink />
                <NavLink />
            </ul>
        </nav>
    );
  }

  //export default NavBar