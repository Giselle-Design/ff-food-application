
import React, {Component, Fragment} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar'
import Foods from "./components/foods/Foods"
import Search from "./components/foods/Search"
import Food from "./components/foods/Food"
import Alert from './components/layout/Alert'
import About from './components/pages/About'

import axios from 'axios';


class App extends Component {
  state = {
    foods: [],
    foodName: [],
    loading: false,
    alert: null
  };

  
  // Search Foods
  searchFoods = async (text) => {
    this.setState({ loading: true });

    const options = {
      method: 'GET',
      url: 'https://tasty.p.rapidapi.com/recipes/list',
      params: {from: '0', size: '20', tags: 'under_30_minutes', q: `${text}`},
      headers: {
        'x-rapidapi-key': `${process.env.REACT_APP_FAVOURITE_FOOD_ID}`,
        'x-rapidapi-host': 'tasty.p.rapidapi.com'
      }
    };

     if(!text) {
       this.setState({ loading: false})
       return null
     } else {
      let res = await axios.request(options);
      this.setState({ foods: res.data.results, loading: false})
      //  console.log(res.data)
     }
      
  };

  // Get single Food

  getFood = async (favFood) => {
    this.setState({ loading: true });

    const options = {
      method: 'GET',
      url: 'https://tasty.p.rapidapi.com/recipes/detail',
      params: {id: `${favFood}`},
      headers: {
        'x-rapidapi-key': `${process.env.REACT_APP_FAVOURITE_FOOD_ID}`,
        'x-rapidapi-host': 'tasty.p.rapidapi.com'
      }
    };

    
     let res = await axios.request(options);
     this.setState({ foodName: res.data, loading: false})
      //  console.log(res.data)
     
  }
  

  // Clear Foods from state
  clearFoods = () => this.setState({ foods: [], loading: false })
  
  // Setting Alert when a user doesn't enter anything inside the search input
  setAlert = (msg, type) => {
    this.setState({ alert: {msg: msg, type: type }});
  // Defining setTimeout method for vanishing alert component after 2000ms  
    setTimeout(() => this.setState({ alert: null }), 2000)
  };

   
  render(){
    const { foods, loading, alert, foodName } = this.state
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
                    searchFoods={this.searchFoods}  
                    clearFoods={this.clearFoods} 
                    showClear= {foods.length > 0 ? true : false}
                    setAlert={this.setAlert}
                  />
                  <Foods loading={loading} foods={foods}/>
              </Fragment>
            )}
            />
            <Route exact path="/about" component={About}/>
            <Route exact path="/food/:id" render={props => (
              <Food {...props} getFood={this.getFood} foodName={foodName} loading={loading}/>
            )} />
          </Switch>  
         
        </div>        
      </div>
      </Router>
    );

  }
  
}

export default App;
