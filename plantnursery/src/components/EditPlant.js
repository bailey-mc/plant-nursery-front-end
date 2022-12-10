import React from 'react';
import {useState, useEffect} from 'react'
import axios from 'axios'

const EditPlant = (props) => {
    // const [updatePlantName, setUpdatePlantName] = useState()
    // const [updatePlantBotanicalName, setUpdatePlantBotanicalName] = useState()
    // const [updatePlantType, setUpdatePlantType] = useState()
    // const [updatePlantTemperature, setUpdatePlantTemperature] = useState()
    // const [updatePlantLight, setUpdatePlantLight] = useState()
    // const [updatePlantWaters, setUpdatePlantWaters] = useState()
    // const [updatePlant]

    const [updatePlantName, setUpdatePlantName] = useState("");
    const [updatePlantBotanicalName, setUpdatePlantBotanicalName] = useState("");
    const [updatePlantType, setUpdatePlantType] = useState("");
    const [updatePlantTemperature, setUpdatePlantTemperature] = useState("");
    const [updatePlantLight, setUpdatePlantLight] = useState("");
    const [updatePlantWater, setUpdatePlantWater] = useState("");
    const [updatePlantPrice, setUpdatePlantPrice] = useState("");
    const [updatePlantImage, setUpdatePlantImage] = useState("");
    const [updatePlantStock, setUpdatePlantStock] = useState("");
  
    const handleUpdatePlantName = (event) => {
      setUpdatePlantName(event.target.value);
    };
    const handleUpdatePlantBotanicalName = (event) => {
      setUpdatePlantBotanicalName(event.target.value);
    };
    const handleUpdatePlantType = (event) => {
      setUpdatePlantType(event.target.value);
    };
    const handleUpdatePlantTemperature = (event) => {
      setUpdatePlantTemperature(event.target.value);
    };
    const handleUpdatePlantLight = (event) => {
      setUpdatePlantLight(event.target.value);
    };
    const handleUpdatePlantWater = (event) => {
      setUpdatePlantWater(event.target.value);
    };
    const handleUpdatePlantPrice = (event) => {
      setUpdatePlantPrice(event.target.value);
    };
    const handleUpdatePlantImage = (event) => {
      setUpdatePlantImage(event.target.value);
    };
    const handleUpdatePlantStock = (event) => {
      setUpdatePlantStock(event.target.value);
    };
    const handleUpdatePlant = (event) => {
      event.preventDefault();
      event.target.reset();
  
      axios
        .put(`localhost:3001/plantnursery/${props.plant._id}`, {
          name: updatePlantName,
          botanicalName: updatePlantBotanicalName,
          type: updatePlantType,
          temperature: updatePlantTemperature,
          requiresLight: updatePlantLight,
          waterAmount: updatePlantWater,
          price: updatePlantPrice,
          image: updatePlantImage,
          inStock: updatePlantStock,
        })
        .then((response) => {
          props.getPlants(response.data);
          setUpdatePlantName("");
          setUpdatePlantBotanicalName("");
          setUpdatePlantType("");
          setUpdatePlantTemperature("");
          setUpdatePlantLight("");
          setUpdatePlantWater("");
          setUpdatePlantPrice("");
          setUpdatePlantImage("");
          setUpdatePlantStock("");
         
        });
    };
  
    return (
      <div>
        <form onSubmit={handleUpdatePlant}>
          <input
            type="text"
            defaultValue={props.plant.name}
            onChange={handleUpdatePlantName}
          />
          <br />
          <input
            type="text"
            defaultValue={props.plant.botanicalName}
            onChange={handleUpdatePlantBotanicalName}
          />
          <br />
          <input 
            type="text" 
            defaultValue={props.plant.type}
            onChange={handleUpdatePlantType} />
          <br />
          <input
            type="text"
            placeholder="Temperature"
            defaultValue={props.plant.temperature}
            onChange={handleUpdatePlantTemperature}
          />
          <br />
          <input
            type="text"
            defaultValue={props.plant.requiresLight}
            onChange={handleUpdatePlantLight}
          />
          <br />
          <input
            type="text"
            defaultValue={props.plant.waterAmount}
            onChange={handleUpdatePlantWater}
          />
          <br />
          <input
            type="number"
            defaultValue={props. plant.price}
            onChange={handleUpdatePlantPrice}
          />
          <br />
          <input 
            type="text" 
            defaultValue={props.plant.image}
            onChange={handleUpdatePlantImage} />
          <br />
          <input
            type="number"
            defaultValue={props.plant.inStock}
            onChange={handleUpdatePlantStock}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
}

export default EditPlant;
