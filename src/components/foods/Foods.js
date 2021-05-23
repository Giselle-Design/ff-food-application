import React from 'react'
import FoodItem from "./FoodItem"
import Spinner from "../layout/Spinner";
import PropTypes from 'prop-types'


const Foods = ({ foods , loading }) => {     
    if(loading){
        return <Spinner/> 

    }else {
        return (
            <div className="grid-3">
                {foods.map(food => (
                    <FoodItem food={food}/>
                ))}
            </div>
        )

    }
        
}

Foods.propTypes = {
    foods: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}
    





export default Foods
