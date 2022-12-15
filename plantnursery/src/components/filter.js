import {useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import axios from 'axios';


const Filter = (props) => {
    const [show, setShow] = useState(false);
    const [type, setType] = useState(false);
    const [zone, setZone] = useState(false);
    const [light, setLight] = useState(false);
    const [water, setWater] = useState(false);
    const [key, setKey] = useState()
    const [value, setValue] = useState()

    const handleSetType = () => {
        setType(!type)
        setZone(false)
        setLight(false)
        setWater(false)

        setKey('type')
    }

    const handleSetZone = () => {
        setZone(!zone)
        setType(false)
        setLight(false)
        setWater(false)
        setKey('temperature')
    }

    const handleSetLight = () => {
        setLight(!light)
        setType(false)
        setZone(false)
        setWater(false)
    }

    const handleSetWater = () => {
        setWater(!water)
        setType(false)
        setZone(false)
        setLight(false)
        setKey('waterAmount')
    }


    const handleClose = () => {
        setShow(false);
        setType(false)
        setZone(false)
        setLight(false)
        setWater(false)
    }
    const handleShow = () => setShow(true);
    
    const filter = () => {
        console.log('axios reqqqq');
        let encodedKey = encodeURIComponent(key)
        console.log(key);
        let encodedValue = encodeURIComponent(value)

        console.log(encodedValue);
        console.log(encodedKey);
        console.log(value);
        axios
        .get(`https://ancient-lowlands-69118.herokuapp.com/plantnursery/${encodedKey}/${encodedValue}`)
        .then((response)=> {
            console.log(response.data );
            console.log('response data');
            if (response.data.length > 0) {
                props.setPlants(response.data )
                props.setShowMessage(false)
            } else {
                props.setPlants([])
                props.setShowMessage(true)
            }
        })


        setShow(false)


    }

    return (
        <>
      <button className="filter-button"  onClick={handleShow}>
        Filter By:
      </button> 
      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Filter by :</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form>
                Type: 
                <input 
                    type="radio" 
                    name="filterby" 
                    onChange={handleSetType}
                /><br/>
                {type?
                <fieldset>
                    <input 
                        type="radio" 
                        name="type"
                        onChange={()=> setValue('Annual')}
                    /> Annual <br/>
                    <input 
                        type="radio"  
                        name="type"
                        onChange={()=> setValue('Perennial')}
                    /> Perennial <br/>
                    <input 
                        type="radio" 
                        name="type" 
                        onChange={()=> setValue('Seasonal Plant')}
                    /> Seasonal Plant <br/>
                    <input 
                        type="radio" 
                        name="type" 
                        onChange={()=> setValue('Seed or Bulb')}
                    /> Seed or Bulb <br/>
                    <input 
                        type="radio" 
                        name="type" 
                        onChange={()=> setValue('Succulent')}
                    /> Succulent <br/>
                    <input 
                        type="radio" 
                        name="type" 
                        onChange={()=> setValue('Tree, Shrub, or Rose')}
                    /> Tree, Shrub, or Rose <br/>
                    <input 
                        type="radio" 
                        name="type" 
                        onChange={()=> setValue('Tropical Houseplant')}
                    /> Tropical Houseplant<br/>
                    <input 
                        type="radio" 
                        name="type" 
                        onChange={()=> setValue('Vegetable, Herb, or Fruit')}
                    /> Vegetable, Herb, or Fruit <br/>
                    <input 
                        type="radio" 
                        name="type" 
                        onChange={()=> setValue('Other')}
                    /> Other<br/>
                </fieldset>
                :
                    null
                }
                USDA Hardiness Zone: 
                <input 
                    type="radio" 
                    name="filterby"
                    onChange={handleSetZone}
                /><br/>
                {zone?
                    <fieldset>
                        <input 
                            type="radio" 
                            name="zone" 
                            onChange={()=>setValue('Zone 1')}
                        /> Zone 1<br/>
                         <input 
                            type="radio" 
                            name="zone" 
                            onChange={()=>setValue('Zone 2')}
                        /> Zone 2<br/>
                         <input 
                            type="radio" 
                            name="zone" 
                            onChange={()=>setValue('Zone 3')}
                        /> Zone 3<br/>
                         <input 
                            type="radio" 
                            name="zone" 
                            onChange={()=>setValue('Zone 4')}
                        /> Zone 4<br/>
                         <input 
                            type="radio" 
                            name="zone" 
                            onChange={()=>setValue('Zone 5')}
                        /> Zone 5<br/>
                         <input 
                            type="radio" 
                            name="zone" 
                            onChange={()=>setValue('Zone 6')}
                        /> Zone 6<br/>
                         <input 
                            type="radio" 
                            name="zone" 
                            onChange={()=>setValue('Zone 7')}
                        /> Zone 7<br/>
                         <input 
                            type="radio" 
                            name="zone" 
                            onChange={()=>setValue('Zone 8')}
                        /> Zone 8<br/>
                         <input 
                            type="radio" 
                            name="zone" 
                            onChange={()=>setValue('Zone 9')}
                        /> Zone 9<br/>
                         <input 
                            type="radio" 
                            name="zone" 
                            onChange={()=>setValue('Zone 10')}
                        /> Zone 10<br/>
                         <input 
                            type="radio" 
                            name="zone" 
                            onChange={()=>setValue('Zone 11')}
                        /> Zone 11<br/>
                         <input 
                            type="radio" 
                            name="zone" 
                            onChange={()=>setValue('Zone 12')}
                        /> Zone 12<br/>
                         <input 
                            type="radio" 
                            name="zone" 
                            onChange={()=>setValue('Zone 13')}
                        /> Zone 13<br/>
                    </fieldset>
                :
                    null
                }
                Amount of Light: 
                    <input 
                    type="radio" 
                    name="filterby"
                    onChange={handleSetLight}
                /><br/>
                {light?
                    <fieldset>
                        <input 
                            type="radio" 
                            name="light"
                            onChange={()=>setValue('Low Light')}
                        /> Low Light<br/>
                        <input 
                            type="radio" 
                            name="light"
                            onChange={()=>setValue('Partial Light')}
                        /> Partial Light <br/>
                        <input 
                            type="radio" 
                            name="light"
                            onChange={()=>setValue('Full Light')}
                        /> Full Light<br/>
                    </fieldset>
                :
                    null
                }
                Amonut of Water: 
                <input 
                    type="radio" 
                    name="filterby"
                    onChange={handleSetWater}
                /><br/>
                {water?
                    <fieldset>
                        <input 
                            type="radio" 
                            name="water"
                            onChange={()=>setValue('Very Low')}
                        /> Very Low<br/>
                        <input 
                            type="radio" 
                            name="water"
                            onChange={()=>setValue('Low')}
                        /> Low<br/>
                        <input 
                            type="radio" 
                            name="water"
                            onChange={()=>setValue('Moderate')}
                        /> Moderate<br/>
                        <input 
                            type="radio"
                            name="water"
                            onChange={()=>setValue('High')}
                        /> High<br/>
                    </fieldset>
                :
                    null
                }
                {/* Price: 
                <input 
                    type="radio" 
                    name="filterby"
                    onChange={handleSetPrice}
                /><br/>
                {price? 
                    <fieldset>
                        <input 
                            type="radio"
                            name="price"
                            onChange={()=>setValue(25)}
                        /> Below 25 <br/>
                        <input 
                            type="radio"
                            name="price"
                            onChange={()=>setValue(50)}
                        /> Below 50<br/>
                        <input 
                            type="radio"
                            name="price"
                            onChange={()=>setValue(75)}
                        /> Below 75<br/>
                        <input 
                            type="radio"
                            name="price"
                            onChange={()=>setValue(1000)} 
                        /> 75 And Up<br/>
                    </fieldset>
                :
                    null
                } */}

            </form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={filter} >
            Filter
          </Button>
        </Modal.Footer>
      </Modal>

      
    </>
    )
}

export default Filter;
