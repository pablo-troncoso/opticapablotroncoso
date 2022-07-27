//comienza en mayúscula: PascalCase
// se exporta
// importarlo en App
import NavLink from "../NavLink/NavLink";
import "./navbar.css"
export default function NavBar() {

    function handleClick() {
     console.log("click");
    }    

    return (
        <nav className="nav-main">
            <ul className = "nav-list">
                <NavLink handleClick={handleClick} title="Modelos"/>
                <NavLink handleClick={handleClick} title="Cristales"/>
                <NavLink handleClick={handleClick} title="Filtros"/>
                <NavLink handleClick={handleClick} title="Lentes"/>
                <NavLink handleClick={handleClick} title="Contacto"/>

              
            </ul>
        </nav>
    );
  }

  //export default NavBar