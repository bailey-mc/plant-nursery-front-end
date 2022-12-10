import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Plant from './components/Plant'
import New from './components/NewPlant'

function App() {
  // HOOKS
  const [plants, setPlants] = useState([])

  const getPlants = () => {
    axios
    .get(
      'http://localhost:3001/plantnursery'
      )
    .then((response)=> {
     setPlants(response.data)
    })
  }
  
  useEffect(()=> {
     getPlants() 
  }, [])
  
  return (
    <div>
      <h1>Plants Paradise</h1>
      <New/>
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
