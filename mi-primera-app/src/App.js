import logo from './logo.svg';
import './App.css';
import { HolaMundo } from './components/HolaMundo';
import { Saludar } from './components/Saludar';
import { useEffect, useState } from 'react';

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

  const [stateCar, setStateCar] = useState(false);
  const encenderApagar = () => {
    console.log('Encender/Apagar');
    //setStateCar(!stateCar);
    setStateCar(prev => !prev);
    setCount(count + 1)
  }

  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('Total: ' + count);
  }, [count])

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
        <br/>
        <hr/>
        <h1>UseState: {stateCar ? 'Encendido' : 'Apagado'}</h1>
        <button onClick={encenderApagar}>Click UseState</button>
        <br/>
        <hr/>
        <h1>UseEffect: {count}</h1>
        <button onClick={encenderApagar}>Click UseState</button>
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


