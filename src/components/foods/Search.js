import React, { useState } from 'react'
import PropTypes from 'prop-types'


const Search = ({ searchFoods, clearFoods, showClear, setAlert }) => {
   const [ text, setText] = useState('');

    
    const onSubmit = (e) => {
        // a preventDefault is called on the event when submitting the form to prevent a browser reload/refresh. 
        e.preventDefault();
        if(text === ''){
            setAlert("Please Enter Name of Food", 'danger');
        } else {
            searchFoods(text);
            setText('');
        }
    }
        
   
    const onChange = (e) => setText(e.target.value);
        return (
            <div>
                <form onSubmit={onSubmit} className="form">
                    <input 
                       type="text" 
                       name="text" 
                       value={text} 
                       onChange={onChange}
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


Search.propTypes = {
    searchFoods: PropTypes.func.isRequired,
    clearFoods: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
};


export default Search
