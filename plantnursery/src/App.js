import {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Plant from './components/plant'
import New from './components/new'

function App() {

  // HOOKS
  const [plants, setPlants] = useState([])

  const getPlants = () => {
    axios
    .get('herokuapiurl')
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
