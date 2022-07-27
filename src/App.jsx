import NavBar from './components/NavBar/NavBar';

function App() {

  const stylesH1 = {
    color:'blue',
  }

  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>        
        <h1>
          Bienvenidos a la Gran Óptica Gran!
        </h1>        
      </header>
    </div>
  );
}

export default App;
