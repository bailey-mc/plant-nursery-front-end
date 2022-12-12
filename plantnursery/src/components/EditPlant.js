import React from 'react';
import {useState, useEffect} from 'react'
import axios from 'axios'

const EditPlant = (props) => {


    const [updatePlantName, setUpdatePlantName] = useState();
    const [updatePlantBotanicalName, setUpdatePlantBotanicalName] = useState();
    const [updatePlantType, setUpdatePlantType] = useState();
    const [updatePlantTemperature, setUpdatePlantTemperature] = useState();
    const [updatePlantLight, setUpdatePlantLight] = useState();
    const [updatePlantWater, setUpdatePlantWater] = useState();
    const [updatePlantPrice, setUpdatePlantPrice] = useState();
    const [updatePlantImage, setUpdatePlantImage] = useState();
    const [updatePlantStock, setUpdatePlantStock] = useState();
  
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
    const handleUpdatePlant = (plantData) => {
   
      axios
        .put(`http://localhost:3001/plantnursery/${plantData._id}`, {
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
        <form className="edit-plant-form" onSubmit={
            (event) => {
                handleUpdatePlant(props.plant)
            }
        }>
          <label>
          <input
            type="text"
            defaultValue={props.plant.name}
            onChange={handleUpdatePlantName}
          />
          </label>
        
          <label>
          <input
            type="text"
            defaultValue={props.plant.botanicalName}
            onChange={handleUpdatePlantBotanicalName}
          />
          </label>
         
         <label>
          <input 
            type="text" 
            defaultValue={props.plant.type}
            onChange={handleUpdatePlantType} />
          </label>

          <label>
          <input
            type="text"
            placeholder="Temperature"
            defaultValue={props.plant.temperature}
            onChange={handleUpdatePlantTemperature}
          />
         </label>

         <label>
          <input
            type="text"
            defaultValue={props.plant.requiresLight}
            onChange={handleUpdatePlantLight}
          />
          </label>

          <label>
          <textarea 
            type="text"
            defaultValue={props.plant.waterAmount}
            onChange={handleUpdatePlantWater}
          />
          </label>

          <label>
          <input
            type="number"
            defaultValue={props. plant.price}
            onChange={handleUpdatePlantPrice}
          />
          </label>

          <label>
          <input 
            type="text" 
            defaultValue={props.plant.image}
            onChange={handleUpdatePlantImage} />
          </label>

          <label>
          <input
            type="number"
            defaultValue={props.plant.inStock}
            onChange={handleUpdatePlantStock}
          />
          </label>
          <br/>
          <button className="button" classtype="submit">Update</button>
        </form>
      </div>
    )
}

export default EditPlant;
