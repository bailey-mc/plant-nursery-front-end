import React from "react";
import Card from 'react-bootstrap/Card'


const Plant = (props) => {
  return (
    <Card>
      <Card.Body>
        <div>
          <img className="mb-2" src={props.plant.image} />
          <p>Name: {props.plant.name}</p>
          <p>Botanical name: {props.plant.botanicalName}</p>
          <p>Type: {props.plant.type}</p>
          <p>Thrives in this environment: {props.plant.temperature}</p>
          <p>Light required: {props.plant.requiresLight}</p>
          <p>Water Amount: {props.plant.waterAmount}</p>
          <p>Price: ${props.plant.price}</p>
          <p>In stock: {props.plant.inStock}</p>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Plant;
