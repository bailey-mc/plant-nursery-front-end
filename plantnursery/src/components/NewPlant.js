import {useState } from "react";
import React from "react";
import axios from "axios";

const New = (props) => {
  const [newPlantName, setNewPlantName] = useState();
  const [newPlantBotanicalName, setNewPlantBotanicalName] = useState();
  const [newPlantType, setNewPlantType] = useState();
  const [newPlantTemperature, setNewPlantTemperature] = useState();
  const [newPlantLight, setNewPlantLight] = useState();
  const [newPlantWater, setNewPlantWater] = useState();
  const [newPlantPrice, setNewPlantPrice] = useState();
  const [newPlantImage, setNewPlantImage] = useState();
  const [newPlantStock, setNewPlantStock] = useState();

  const handleNewPlantName = (event) => {
    setNewPlantName(event.target.value);
  };
  const handleNewPlantBotanicalName = (event) => {
    setNewPlantBotanicalName(event.target.value);
  };
  const handleNewPlantType = (event) => {
    setNewPlantType(event.target.value);
  };
  const handleNewPlantTemperature = (event) => {
    console.log(event.target.value);
    setNewPlantTemperature(event.target.value);
  };
  const handleNewPlantLight = (event) => {
    setNewPlantLight(event.target.value);
  };
  const handleNewPlantWater = (event) => {
    setNewPlantWater(event.target.value);
  };
  const handleNewPlantPrice = (event) => {
    setNewPlantPrice(event.target.value);
  };
  const handleNewPlantImage = (event) => {
    setNewPlantImage(event.target.value);
  };
  const handleNewPlantStock = (event) => {
    setNewPlantStock(event.target.value);
  };
  const handleNewPlant = (event) => {
    event.preventDefault();
    event.target.reset();

    

    axios
      .post("https://ancient-lowlands-69118.herokuapp.com/plantnursery", {
        // .post
        //   ('http:localhost:3001/plantnursery', {
        name: newPlantName,
        botanicalName: newPlantBotanicalName,
        type: newPlantType,
        temperature: newPlantTemperature,
        requiresLight: newPlantLight,
        waterAmount: newPlantWater,
        price: newPlantPrice,
        image: newPlantImage,
        inStock: newPlantStock,
      })
      .then(() => {
        props.getPlants();
        props.setShowPlants(true);
    
        // axios
        //     .get('ur')
        //     .then((response) => {
        //         console.log(response.data);
        //     })
      });
  };

  return (
    <div>
      <form className="new-plant-form" onSubmit={handleNewPlant}>
        <label>
        <span>Name:</span> <input type="text" placeholder="Common Name" onChange={handleNewPlantName}/>
        </label>
        <label>
        <span>Botanical name:</span> <input type="text" placeholder="Botanical Name" onChange={handleNewPlantBotanicalName}/>
        </label>
        <label>
        <span>Type:</span> <input type="text" placeholder="Type" onChange={handleNewPlantType} />
        </label>
        <label>
        <span>USDA Hardiness Zone:</span> 
        <select onChange={handleNewPlantTemperature} >
          <option>Hardiness Zone</option>
          <option value="Zone 1">Hardiness Zone 1</option>
          <option value="Zone 2">Hardiness Zone 2</option>
          <option value="Zone 3">Zone 3</option>
          <option value="Zone 4">Zone 4</option>
          <option value="Zone 5">Zone 5</option>
          <option value="Zone 6">Zone 6</option>
          <option value="Zone 7">Zone 7</option>
          <option value="Zone 8">Zone 8</option>
          <option value="Zone 9">Zone 9</option>
          <option value="Zone 10">Zone 10</option>
        </select>
        {/* <input type="text" placeholder="Temp it needs" onChange={handleNewPlantTemperature}/> */}
        </label>
        <label>
        <span>Light required:</span> <input type="text"
          placeholder="Amt of light needed"
          onChange={handleNewPlantLight}/>
        </label>
        <label>
        <span>Water needed:</span> <input type="text" placeholder="Amt of water needed" onChange={handleNewPlantWater}/>
        </label>
        <label>
        <span>Price:</span> <input type="number" placeholder="Price"
          onChange={handleNewPlantPrice}/>
        </label>
        <label>
        <span>Image link:</span> <input type="text" placeholder="Image" onChange={handleNewPlantImage} />
        </label>
        <label>
        <span># in stock:</span> <input type="number" placeholder="# in stock" onChange={handleNewPlantStock}/>
        </label>
        <br/>
        <button className="button" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default New;
