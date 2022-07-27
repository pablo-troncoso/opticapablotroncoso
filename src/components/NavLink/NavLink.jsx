export default function NavLink() {
  return (
    <div>NavLink</div>
  )
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