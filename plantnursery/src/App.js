import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Plant from "./components/Plant";
import New from "./components/NewPlant";
// import EditPlant from "./components/EditPlant";

function App() {
  // HOOKS
  const [plants, setPlants] = useState([]);
  const [showPlants, setShowPlants] = useState(true);

  // const client = axios.create({baseURL: 'https://ancient-lowlands-69118.herokuapp.com/'})

  const getPlants = () => {
    axios.get('https://ancient-lowlands-69118.herokuapp.com/plantnursery').then((response) => {
      setPlants(response.data);
    });
  };

  useEffect(() => {
    // client.get('/plantnursery').then((response)=> {
    //   setPlants(response.data);
    getPlants()
      
    // })
  }, []);

  return (
    <div>
      <h1>
        Plants Parad<i class="bi bi-tree"></i>se
      </h1>
      <div className="buttons-container">
        <button
          onClick={() => {
            setShowPlants(true);
          }}
        >
          Show All Plants
        </button>
        <button
          onClick={() => {
            setShowPlants(false);
          }}
        >
          Add New Plant Listing
        </button>
      </div>

      {showPlants ? (
        <div className="plants-container">
          {plants.map((plant, index) => {
            return <Plant plant={plant} getPlants={getPlants} key={index} />;
          })}
        </div>
      ) : (
        <>
          <section>
            <h2>Add New Plant Listing</h2>
          </section>
          <New getPlants={getPlants} setShowPlants={setShowPlants} />
        </>
      )}
    </div>
  );
}

export default App;
