import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Plant from "./components/Plant";
import New from "./components/NewPlant";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
import LoginForm from "./components/login";
import NewUserForm from "./components/newuser";
// import EditPlant from "./components/EditPlant";

function App() {
  // HOOKS
  const [plants, setPlants] = useState([]);
  const [showPlants, setShowPlants] = useState(true);
  // const [showEditForm, setShowEditForm] = useState(true);

  // const client = axios.create({baseURL: 'https://ancient-lowlands-69118.herokuapp.com/'})

  const getPlants = () => {
    axios
      .get("https://ancient-lowlands-69118.herokuapp.com/plantnursery")
      .then((response) => {
        setPlants(response.data);
      });
  };

  const [toggleLoginForm, setToggleLoginForm] = useState(false);
  const [toggleLogin, setToggleLogin] = useState(true);
  const [toggleError, setToggleError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [toggleLogout, setToggleLogout] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const handleCreateUser = (userObj) => {
    axios
      .post(
        "https://ancient-lowlands-69118.herokuapp.com/users/createaccount",
        userObj
      )
      .then((response) => {
        if (response.data.username) {
          console.log(response);
          setToggleError(false);
          setErrorMessage("");
          setCurrentUser(response.data);
          handleToggleLogout();
        } else {
          setErrorMessage(response.data);
          setToggleError(true);
        }
      });
  };

  const handleLogin = (userObj) => {
    console.log(userObj);
    axios
      .put("https://ancient-lowlands-69118.herokuapp.com/users/login", userObj)
      .then((response) => {
        if (response.data.username) {
          console.log(response);
          setToggleError(false);
          setErrorMessage("");
          setCurrentUser(response.data);
          handleToggleLogout();
        } else {
          console.log(response);
          setToggleError(true);
          setErrorMessage(response.data);
        }
      });
  };

  const handleLogout = () => {
    console.log("......");
    setCurrentUser({});
    handleToggleLogout();
    setToggleLoginForm(false);
  };

  const handleToggleForm = () => {
    setToggleError(false);
    if (toggleLogin === true) {
      setToggleLogin(false);
    } else {
      setToggleLogin(true);
    }
  };

  const handleToggleLogout = () => {
    if (toggleLogout) {
      setToggleLogout(false);
    } else {
      setToggleLogout(true);
    }
  };
  useEffect(() => {
    getPlants();
  }, []);

  return (
    <Router>
      <div>
        <div className="demo-wrap"></div>
        <div className="header">
          {/* empty div for spacing */}
          <div></div>
          <div>
            <h1>
              Plants Parad<i className="bi bi-tree"></i>se
            </h1>
          </div>
          <div>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              {!currentUser.username ? (
                <Link to="/login">Log In</Link>
              ) : (
                <Link onClick={handleLogout}>Log out</Link>
              )}
            </nav>
          </div>
        </div>
        <Routes>
          <Route
            path="/login"
            element={
              <LoginForm
                handleLogin={handleLogin}
                toggleError={toggleError}
                errorMessage={errorMessage}
                setCurrentUser={setCurrentUser}
              />
            }
          />
          <Route
            path="/createaccount"
            element={
              <NewUserForm
                handleCreateUser={handleCreateUser}
                toggleError={toggleError}
                errorMessage={errorMessage}
              />
            }
          />
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
                  {/* IF LOGGED IN, CAN ADD NEW PLANT */}
                  {currentUser.username ? (
                    <button
                      onClick={() => {
                        setShowPlants(false);
                      }}
                    >
                      Add New Plant Listing
                    </button>
                  ) : null}
                  {/* <button
                    onClick={() => {
                      setShowPlants(false);
                    }}
                  >
                    Add New Plant Listing
                  </button> */}
                </div>
                {showPlants ? (
                  <div className="plants-container">
                    {plants.map((plant, index) => {
                      return (
                        <Plant
                          plant={plant}
                          getPlants={getPlants}
                          currentUser={currentUser}
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
                    <New getPlants={getPlants} setShowPlants={setShowPlants} />
                  </>
                )}
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
