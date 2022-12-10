import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";

const New = (props) => {
  const [newPlantName, setNewPlantName] = useState("");
  const [newPlantBotanicalName, setNewPlantBotanicalName] = useState("");
  const [newPlantType, setNewPlantType] = useState("");
  const [newPlantTemperature, setNewPlantTemperature] = useState("");
  const [newPlantLight, setNewPlantLight] = useState("");
  const [newPlantWater, setNewPlantWater] = useState("");
  const [newPlantPrice, setNewPlantPrice] = useState("");
  const [newPlantImage, setNewPlantImage] = useState("");
  const [newPlantStock, setNewPlantStock] = useState("");

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
      .post("localhost:3001/plantnursery", {
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
        setNewPlantName("");
        setNewPlantBotanicalName("");
        setNewPlantType("");
        setNewPlantTemperature("");
        setNewPlantLight("");
        setNewPlantWater("");
        setNewPlantPrice("");
        setNewPlantImage("");
        setNewPlantStock("");
        // axios
        //     .get('ur')
        //     .then((response) => {
        //         console.log(response.data);
        //     })
      });
  };

  return (
    <div>
      <form onSubmit={handleNewPlant}>
        <input
          type="text"
          placeholder="Common Name"
          onChange={handleNewPlantName}
        />
        <br />
        <input
          type="text"
          placeholder="Botanical Name"
          onChange={handleNewPlantBotanicalName}
        />
        <br />
        <input type="text" placeholder="Type" onChange={handleNewPlantType} />
        <br />
        <input
          type="text"
          placeholder="Temperature"
          onChange={handleNewPlantTemperature}
        />
        <br />
        <input
          type="text"
          placeholder="Amt of light needed"
          onChange={handleNewPlantLight}
        />
        <br />
        <input
          type="text"
          placeholder="Amt of water needed"
          onChange={handleNewPlantWater}
        />
        <br />
        <input
          type="number"
          placeholder="Price"
          onChange={handleNewPlantPrice}
        />
        <br />
        <input type="text" placeholder="Image" onChange={handleNewPlantImage} />
        <br />
        <input
          type="number"
          placeholder="# in stock"
          onChange={handleNewPlantStock}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default New;
