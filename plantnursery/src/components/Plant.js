import axios, { AxiosHeaders } from "axios";
import React, {useState} from "react";
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import EditPlant from './EditPlant'

const Plant = (props) => {
  const [showEditForm, setShowEditForm] = useState(false)
  const [showModal, setShowModal] = useState(false)

  // modal
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

// delete
const handleDelete = () => {
  axios
    .delete(`https://ancient-lowlands-69118.herokuapp.com/plantnursery/${props.plant._id}`)
    .then (() => {
      props.getPlants()
      handleClose()
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

          {props.currentUser.username ?
            <button className="button" onClick={() => {
              {setShowEditForm(prevShowEditForm => !prevShowEditForm)}}}>
                {showEditForm ? 'Hide' : 'Show'} Edit Form</button>
          :
            null
          }

          <>

          {props.currentUser.username ?
          <button className="button" onClick={handleShow}>Delete Listing</button>
            
          :
            null
          }
            <Modal show={showModal} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Are you sure you want to delete this listing?</Modal.Title>
              </Modal.Header>
                <Modal.Body>Are you positive?</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Changed my mind!
                  </Button>
                  <Button variant="danger" onClick={handleDelete}>
                    I'll take it!
                  </Button>
                </Modal.Footer>
            </Modal>
          </>

        </div>
      
        {showEditForm ? (
          <EditPlant plant={props.plant} getPlants={props.getPlants} setShowEditForm={setShowEditForm} setPlants={props.setPlants}/>
        ) : null} 
      </Card.Body>
    </Card>
  );
};

export default Plant;
