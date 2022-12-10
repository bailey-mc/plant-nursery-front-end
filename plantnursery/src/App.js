import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Plant from './components/Plant'
import New from './components/NewPlant'

function App() {
  // HOOKS
  const [plants, setPlants] = useState([])

    useEffect(()=> {
      axios
           .get('herokuapiurl')
           .then((response)=> {
            setPlants(response.data)
           })
    })
  
  return (
    <div>
      <h1>Plants Paradise</h1>
      
        <div className="plants-container">
        {
          plants.map((plant) => {
            return (
              <Plant plant={plant}/>
            )
          })
        }
        </div>
        <New/>
    </div>
  );
}

export default App;
