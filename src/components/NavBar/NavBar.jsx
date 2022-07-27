//comienza en mayúscula: PascalCase
// se exporta
// importarlo en App
import "./navbar.css"
export default function NavBar() {
    return (
        <nav className="nav-main">
            <ul>
                <li>Modelos</li>
                <li>Cristales</li>
                <li>Filtros</li>
                <li>Lentes</li>
                <li>Contacto</li>
            </ul>
        </nav>
    );
  }

  //export default NavBar