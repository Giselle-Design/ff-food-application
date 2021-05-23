import React from 'react'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom"

const FoodItem =  ({ food: { thumbnail_url, name, original_video_url, id }}) => { 
    // const {thumbnail_url, name, original_video_url} = props.food;
    
    if(!original_video_url){
        return null
    } else {
        return (
            <div className="card text-center">
                <img 
                src={thumbnail_url} 
                alt="" 
                // className="round-img"
                style={{ width: '250px', height: '200px'}}
                />
                <h3>{name}</h3>
                <div>
                    <Link to={`/food/${id}`} className="btn btn-dark btn-md my-1">Watch Video</Link>
                </div>

            </div>
    )
    }
    
    
}


FoodItem.propTypes = {
    food: PropTypes.object.isRequired,
}

export default FoodItem

