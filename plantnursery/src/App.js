import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Plant from "./components/Plant";
import New from "./components/NewPlant";
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import About from "./components/About";
// import EditPlant from "./components/EditPlant";

function App() {
  // HOOKS
  const [plants, setPlants] = useState([]);
  const [showPlants, setShowPlants] = useState(true);
  const [showEditForm, setShowEditForm] = useState(true);

  // const client = axios.create({baseURL: 'https://ancient-lowlands-69118.herokuapp.com/'})

  const getPlants = () => {
    axios
      .get("https://ancient-lowlands-69118.herokuapp.com/plantnursery")
      .then((response) => {
        setPlants(response.data);
      });
  };

  useEffect(() => {
    // client.get('/plantnursery').then((response)=> {
    //   setPlants(response.data);
    getPlants();

    // })
  }, []);

  return (
    <Router>
      <div>
        <div className="demo-wrap"></div>
        <h1>
          Plants Parad<i className="bi bi-tree"></i>se
        </h1>
        {/* <div className="buttons-container">
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
        </div> */}
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route
              path="/"
              element={
                <>
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
                        return (
                          <Plant
                            plant={plant}
                            getPlants={getPlants}
                            key={index}
                          />
                        );
                      })}
                    </div>
                  ) : (
                    <>
                      <section id="new-listing">
                        <h2>Add New Plant Listing</h2>
                      </section>
                      <New
                        getPlants={getPlants}
                        setShowPlants={setShowPlants}
                      />
                    </>
                  )}
                </>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
