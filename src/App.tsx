import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [names, setNames] = useState(['Vitor', 'Fel', 'VitorFel'])

  useEffect(() => {
    console.log('Meu componente foi montado')

    return () => {
      console.log('Meu componente foi desmontado')
    }

  }, [])


  return (
    <div className="App">

      <head className="App-header">

      <ul>

        {
          names.map((name, index) => <li key={index}>{name}</li>)
        }

      </ul>

      <button
        onClick={() => {
          setNames ([...names, 'Feleleu'])
        }}
      >
        Add
      </button>

      </head>

    </div>
  );
}

export default App;
