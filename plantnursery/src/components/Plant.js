import React from "react";
import Card from 'react-bootstrap/Card'


const Plant = (props) => {
  return (
    <Card>
      <Card.Body>
        <div>
          <img src={props.plant.image} />
          <p>{props.plant.name}</p>
          <p>{props.plant.botaniclName}</p>
          <p>{props.plant.type}</p>
          <p>{props.plant.temperature}</p>
          <p>{props.plant.requiresLight}</p>
          <p>{props.plant.waterAmount}</p>
          <p>{props.plant.price}</p>
          <p>{props.plant.inStock}</p>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Plant;
