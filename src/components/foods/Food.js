import React, { useEffect } from 'react';
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"

const  Food = ({ foodName, loading, getFood, match }) => {
  useEffect(() => {
    getFood(match.params.id);
    // eslint-disable-next-line
  }, []);


  const { name,  original_video_url} = foodName;
    
    if(loading) return <Spinner/>;
    return (
      <div className="container" style={{textAlign: "center", marginTop: "50px"}}>
       
        <h1 className="videopart" style={{marginBottom: "5px"}}> {name}</h1>
        <video  controls>
          <source src={`${original_video_url}`}  type="video/mp4"/>
        </video> 
          <div>
            <Link to="/" className="btn btn-success" style={{ marginTop: "15px", justifyContent:"start"}}>Back</Link>
            <Link to="/about" className="btn btn-success" style={{ marginTop: "15px", justifyContent:"start"}}>About</Link>
          </div> 
      </div>
   
       
    )
  
}

Food.propTypes = {
  loading: PropTypes.bool,
  getFood: PropTypes.func.isRequired,
}


export default Food
