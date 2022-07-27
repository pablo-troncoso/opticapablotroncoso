import logoImg from "./img/opticalogo.jpg";
import NavBar from './components/NavBar/NavBar';

function App() {

  const stylesH1 = {
    color:'blue',
  }

  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>        
        <h1 style={stylesH1}>Bienvenidos a la Gran Óptica Gran!</h1>
        <img alt="logo optica" src={logoImg} />
        <hr />
        <p>Lentes Ópticos</p>       
      </header>
    </div>
  );
}

export default App;
