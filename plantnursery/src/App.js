import {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Plant from './components/plant'
import New from './components/new'

function App() {
  const [plants, setPlants] = useState([])

    useEffect(()=> {
      axios
           .get('herokuapiurl')
           .then((response)=> {
            setPlants(response.data)
           })
    })
  
  return (
    <div className="App">
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
