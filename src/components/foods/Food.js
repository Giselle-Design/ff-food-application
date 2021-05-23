import React, {Component, Fragment} from 'react';
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"

export class Food extends Component {
  componentDidMount(){
    this.props.getFood(this.props.match.params.id);
  }

  static propTypes = {
    loading: PropTypes.bool,
    getFood: PropTypes.func.isRequired,
  }

  render() {
    const { name,  original_video_url} = this.props.foodName;
    const { loading } = this.props;
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
}





export default Food
