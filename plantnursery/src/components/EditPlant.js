import React from "react";
import { useState} from "react";
import axios from "axios";

const EditPlant = (props) => {
  const [updatePlantName, setUpdatePlantName] = useState(props.plant.name);
  const [updatePlantBotanicalName, setUpdatePlantBotanicalName] = useState(props.plant.botanicalName);
  const [updatePlantType, setUpdatePlantType] = useState(props.plant.type);
  const [updatePlantTemperature, setUpdatePlantTemperature] = useState(props.plant.temperature);
  const [updatePlantLight, setUpdatePlantLight] = useState(props.plant.requiresLight);
  const [updatePlantWater, setUpdatePlantWater] = useState(props.plant.waterAmount);
  const [updatePlantPrice, setUpdatePlantPrice] = useState(props.plant.price);
  const [updatePlantImage, setUpdatePlantImage] = useState(props.plant.image);
  const [updatePlantStock, setUpdatePlantStock] = useState(props.plant.inStock);

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
    axios
      .put(
        `https://ancient-lowlands-69118.herokuapp.com/plantnursery/${props.plant._id}`,
        {
          name: updatePlantName,
          botanicalName: updatePlantBotanicalName,
          type: updatePlantType,
          temperature: updatePlantTemperature,
          requiresLight: updatePlantLight,
          waterAmount: updatePlantWater,
          price: updatePlantPrice,
          image: updatePlantImage,
          inStock: updatePlantStock,
        }
      )
      .then((response) => {
        props.getPlants(response.data);
        props.setShowEditForm(false)
      });
  };

  return (
    <div>
      <form className="edit-plant-form" onSubmit={handleUpdatePlant}>
        <label>
        <span>Name:</span>
          <input
            className="mt-2"
            type="text"
            defaultValue={props.plant.name}
            placeholder="Name"
            onChange={handleUpdatePlantName}
          />
        </label>

        <label>
        <span>Botanical Name:</span>
          <input
            type="text"
            defaultValue={props.plant.botanicalName}
            placeholder="Botanical name"
            onChange={handleUpdatePlantBotanicalName}
          />
        </label>

        <label>
        <span>Type:</span>
            <select defaultValue={props.plant.type} onChange={handleUpdatePlantType}>
            <option value="Annual">Annual</option>
            <option value="Perennial">Perennial</option>
            <option value="Seasonal Plant">Seasonal Plant</option>
            <option value="Seed or Bulb">Seed or Bulb</option>
            <option value="Succulent">Succulent</option>
            <option value="Tree, Shrub, or Rose">Tree, Shrub, or Rose</option>
            <option value="Tropical Houseplant">Tropical Houseplant</option>
            <option value="Vegetable, Herb, or Fruit">Vegetable, Herb, or Fruits</option>
            <option value="Other">Other</option>
          </select>
        </label>

        <label>
        <span>USDA Hardiness Zone:</span> 
            <select  defaultValue={props.plant.temperature}onChange={handleUpdatePlantTemperature} >
                <option value="Zone 1">Zone 1</option>
                <option value="Zone 2">Zone 2</option>
                <option value="Zone 3">Zone 3</option>
                <option value="Zone 4">Zone 4</option>
                <option value="Zone 5">Zone 5</option>
                <option value="Zone 6">Zone 6</option>
                <option value="Zone 7">Zone 7</option>
                <option value="Zone 8">Zone 8</option>
                <option value="Zone 9">Zone 9</option>
                <option value="Zone 10">Zone 10</option>
                <option value="Zone 11">Zone 11</option>
                <option value="Zone 12">Zone 12</option>
                <option value="Zone 13">Zone 13</option>
            </select>
        </label>

        <label>
        <span>Light required:</span> 
          <select  defaultValue={props.plant.requiresLight} onChange={handleUpdatePlantLight}>
            <option>Amt of Light</option>
            <option value="Low Light">Low Light</option>
            <option value="Partial Light">Partial Light</option>
            <option value="Full Light">Full Light</option>
          </select>
        </label>

        <label>
            <span>Water needed:</span> 
            <select  defaultValue={props.plant.waterAmount} onChange={handleUpdatePlantWater}>
            <option>Amt of Water</option>
            <option value="Very Low">Very Low</option>
            <option value="Low">Low</option>
            <option value="Moderate">Moderate</option>
            <option value="High">High</option>
          </select>

        </label>

        <label>
        <span>Price:</span> 
          <input
            type="number"
            defaultValue={props.plant.price}
            placeholder="Price"
            onChange={handleUpdatePlantPrice}
          />
        </label>

        <label>
        <span>Image link:</span> 
          <input
            type="text"
            defaultValue={props.plant.image}
            placeholder="image link goes here"
            onChange={handleUpdatePlantImage}
          />
        </label>

        <label>
        <span># in stock:</span>
          <input
            type="number"
            defaultValue={props.plant.inStock}
            placeholder="# in stock"
            onChange={handleUpdatePlantStock}
          />
        </label>
        <br />
        <button className="button" type="submit">
          Update
        </button>
      </form>
    </div>
  );
};

export default EditPlant;
