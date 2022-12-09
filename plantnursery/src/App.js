import {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Plant from './components/plant'

function App() {
  const [plants, setPlants] = useState([])
  
  return (
    <div className="App">
        {
          plants.map((plant) => {
            return (
              <Plant plant={plant}/>
            )
          })
        }
    </div>
  );
}

export default App;
