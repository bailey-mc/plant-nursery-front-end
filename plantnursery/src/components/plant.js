import React from 'react';

const Plant = (props) => {
    return (
        <div>
            <img src={props.plant.image}/>
            <p>{props.plant.name}</p>
            <p>{props.plant.type}</p>
            {props.plant.inStock === true ?
                <p>In Stock</p>
            :
                <p>Check Back Later</p>
            }
        </div>
    )
}

export default Plant;