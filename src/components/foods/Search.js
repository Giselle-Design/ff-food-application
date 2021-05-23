import React, { Component } from 'react'
import PropTypes from 'prop-types'


export class Search extends Component {
    state = {
        text: ''
    };

    static propTypes = {
        searchFoods: PropTypes.func.isRequired,
        clearFoods: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired,
    };

    onSubmit = (e) => {
        // a preventDefault is called on the event when submitting the form to prevent a browser reload/refresh. 
        e.preventDefault();
        if(this.state.text === ''){
            this.props.setAlert("Please Enter Name of Food", 'danger');
        } else {
            this.props.searchFoods(this.state.text);
            this.setState({ text: '' });
    };
        }
        

    //Note: If we didnt use arrow function here we should use bind method inside 
    //the form tag {this.onSubmit.bind(this)} otherwise we have an error

    // onSubmit(e){
    //     e.preventDefault()
    //     console.log(this.sate.text)
    // }
   
    onChange = (e) => this.setState({[e.target.name]: e.target.value});
    

    render() {

        const { clearFoods, showClear } = this.props

        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input 
                       type="text" 
                       name="text" 
                       value={this.state.text} 
                       onChange={this.onChange}
                       placeholder="Search Foods..." 
                    />
                    <input 
                      type="submit" 
                      value="Search"
                      className="btn btn-dark btn-block"
                    />
                </form>
                {showClear && <button 
                    className="btn btn-light btn-block" 
                    onClick={clearFoods}
                    >
                    Clear
                </button>}
              
            </div>
        )
    }
}

export default Search
