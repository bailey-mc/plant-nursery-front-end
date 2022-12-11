import axios, { AxiosHeaders } from "axios";
import React, {useState} from "react";
import Card from 'react-bootstrap/Card'
import EditPlant from './EditPlant'

const Plant = (props) => {
  const [showEditForm, setShowEditForm] = useState(false)

const handleDelete = () => {
  axios
    .delete(`http://localhost:3001/plantnursery/${props.plant._id}`)
    .then (() => {
      props.getPlants()
    })
}

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
          <button onClick={() => {
            {setShowEditForm(prevShowEditForm => !prevShowEditForm)}}}>
              {showEditForm ? 'Hide' : 'Show'} Edit Form</button>

          <button onClick={handleDelete}>Delete Listing</button>
        </div>
        {showEditForm ? (
          <EditPlant plant={props.plant} getPlants={props.getPlants} setShowEditForm={setShowEditForm}/>
        ) : null} 
      </Card.Body>
    </Card>
  );
};

export default Plant;
