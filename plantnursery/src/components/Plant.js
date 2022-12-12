import axios, { AxiosHeaders } from "axios";
import React, {useState} from "react";
import Card from 'react-bootstrap/Card'
import EditPlant from './EditPlant'

const Plant = (props) => {
  const [showEditForm, setShowEditForm] = useState(false)

const handleDelete = () => {
  axios
    .delete(`https://ancient-lowlands-69118.herokuapp.com/plantnursery/${props.plant._id}`)
    .then (() => {
      props.getPlants()
    })
}

  return (
    <Card>
      <Card.Body>
        <div>
          <img className="mb-2" src={props.plant.image} />
          <span>Name:</span> {props.plant.name}<br/>
          <span>Botanical name:</span> {props.plant.botanicalName}<br/>
          <span>Type:</span> {props.plant.type}<br/>
          <span>Thrives in this environment:</span> {props.plant.temperature}<br/>
          <span>Light required:</span> {props.plant.requiresLight}<br/>
          <span>Water Amount:</span> {props.plant.waterAmount}<br/>
          <span>Price:</span> ${props.plant.price}<br/>
          <span>In stock:</span> {props.plant.inStock}<br/>
          <button className="button" onClick={() => {
            {setShowEditForm(prevShowEditForm => !prevShowEditForm)}}}>
              {showEditForm ? 'Hide' : 'Show'} Edit Form</button>

          <button className="button" onClick={handleDelete}>Delete Listing</button>
        </div>
        {showEditForm ? (
          <EditPlant plant={props.plant} getPlants={props.getPlants} setShowEditForm={setShowEditForm}/>
        ) : null} 
      </Card.Body>
    </Card>
  );
};

export default Plant;
