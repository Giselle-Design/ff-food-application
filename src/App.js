
import React, { useState, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar'
import Foods from "./components/foods/Foods"
import Search from "./components/foods/Search"
import Food from "./components/foods/Food"
import Alert from './components/layout/Alert'
import About from './components/pages/About'

import axios from 'axios';

let findfoodId;

if (process.env.NODE_ENV !== "production"){
  findfoodId = process.env.REACT_APP_FAVOURITE_FOOD_ID
}else {
  findfoodId = process.env.FAVOURITE_FOOD_ID
}

const App = () => {
  const [ foods, setFoods ] = useState([]);
  const [ foodName, setFoodName ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const [ alert, setAlert ] = useState(null);
  

  // Search Foods
  const searchFoods = async (text) => {
    setLoading(true);

    const options = {
      method: 'GET',
      url: 'https://tasty.p.rapidapi.com/recipes/list',
      params: {from: '0', size: '20', tags: 'under_30_minutes', q: `${text}`},
      headers: {
        'x-rapidapi-key': `${findfoodId}`,
        'x-rapidapi-host': 'tasty.p.rapidapi.com'
      }
    };

     if(!text) {
      setLoading(false);
       return null
     } else {
      let res = await axios.request(options);
      setFoods(res.data.results);
      setLoading(false);
      //  console.log(res.data)
     }
      
  };

  // Get single Food

  const getFood = async (favFood) => {
    setLoading(true);

    const options = {
      method: 'GET',
      url: 'https://tasty.p.rapidapi.com/recipes/detail',
      params: {id: `${favFood}`},
      headers: {
        'x-rapidapi-key': `${findfoodId}`,
        'x-rapidapi-host': 'tasty.p.rapidapi.com'
      }
    };

    
     let res = await axios.request(options);
     setFoodName(res.data);
     setLoading(false);
      //  console.log(res.data)
     
  }
  

  // Clear Foods from state
  const clearFoods = () => {
    setFoods([]);
    setLoading(false);
  }
  
  // Setting Alert when a user doesn't enter anything inside the search input
  const showAlert = (msg, type) => {
    setAlert({msg, type});
  // Defining setTimeout method for vanishing alert component after 2000ms  
    setTimeout(() => setAlert(null), 2000)
  };

    return (
      <Router>
      <div className="App">
        <Navbar/>
        <div className="container">
          <Alert alert={alert}/>
          <Switch>
            <Route exact path='/' render={ props => (
              <Fragment>
                  <Search 
                    searchFoods={searchFoods}  
                    clearFoods={clearFoods} 
                    showClear= {foods.length > 0 ? true : false}
                    setAlert={showAlert}
                  />
                  <Foods loading={loading} foods={foods}/>
              </Fragment>
            )}
            />
            <Route exact path="/about" component={About}/>
            <Route exact path="/food/:id" render={props => (
              <Food {...props} getFood={getFood} foodName={foodName} loading={loading}/>
            )} />
          </Switch>  
         
        </div>        
      </div>
      </Router>
    );
  
}

export default App;
