//comienza en mayúscula: PascalCase
// se exporta
// importarlo en App
import "./navbar.css"
export default function NavBar() {

    function handleClick(){
     console.log("click");
    }    

    return (
        <nav className="nav-main">
            <ul className = "nav-list">
                <li onClick={handleClick}>Modelos</li>
                <li onClick={handleClick}>Cristales</li>
                <li onClick={handleClick}>Filtros</li>
                <li onClick={handleClick}>Lentes</li>
                <li onClick={handleClick}>Contacto</li>
            </ul>
        </nav>
    );
  }

  //export default NavBar