import logo from './logo.svg';
import './App.css';
import { HolaMundo } from './components/HolaMundo';
import { Saludar } from './components/Saludar';

function App() {
  const edad = 29;

  const user = {
    name: 'Juan',
    lastName: 'Perez',
    edad: 30
  }

  const adiosFn = () => {
    console.log("Adios");
  }

  return (
    <div className="App">
      <header className="App-header">
        <Logo/>
        <HolaMundo/>
         {/* Saludar */}
         <br/>
         <hr/>
        <Saludar
          name="Christian"
          apellido="Alonso"
          edad={edad}
          userInfo={{}}
          adiosFn={adiosFn}
        />
        <br/>
        <hr/>
        <Saludar userInfo={user} adiosFn={adiosFn} />
        <br/>
        <hr/>
        <Saludar userInfo={user} adiosFn={adiosFn} />
      </header>
    </div>
  );
}

const Logo = () => {
  return(
    <>
      <img src={logo} className="App-logo" alt="logo" />
    </>
  )
}


export default App;


