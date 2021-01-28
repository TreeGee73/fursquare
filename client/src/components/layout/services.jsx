import React, { Component } from "react";



class Search extends Component {
  state = {
    searchValue: "",
    items: []
  };

  handleOnChange = event => {
    this.setState({ searchValue: event.target.value });
  };

  handleSearch = () => {
    this.makeApiCall(this.state.searchValue);
  };

  makeApiCall = searchInput => {
    var searchUrl = `https://www.googleapis.com/customsearch/v1?key=AIzaSyDjA6PJZpa-H7l3BevZHUGl8sMBUxGrP7M&cx=3142a4046227fd8fe&q=${searchInput}`;
    fetch(searchUrl)
      .then(response => {
        
        return response.json();
      })
      .then(jsonData => {
             this.setState({ 
            items: jsonData.items, 
            searchValue: ""})
           console.log(jsonData)
            console.log(jsonData.items[0])


           
        
        
      });
      
      
      }




 


  render() {
    return (
      <div id="main">
        <h1>Top Hit Service</h1>
        <input
          name="text"
          type="text"
          placeholder="Search for Service"
          onChange={event => this.handleOnChange(event)}
          value={this.state.searchValue}
        />
        <button onClick={this.handleSearch}>Enter</button>
        {this.state.items !== [] ? (
          <div id="items-container">
            {this.state.items.map((item, index) => (
              <div class="single-meal" key={index}>
                <h2>{item.displayLink}</h2>
                {/* <img src={meal.strMealThumb} alt="meal-thumbnail" /> */}
              </div>
            ))}
          </div>
        ) : (
          <p>Try searching for a meal</p>
        )}
         




        {/* <MediaCard info={this.state.info[0]}/> */}
        {/* {this.state.items 
        !== []? (
          <div id="info-container">
              
            {this.state.items.map((item, index) => (
              <div className="single-info" 
              key={index}
              >
                <h2>{item}</h2> */}
                {/* <img src={meal.strMealThumb} alt="meal-thumbnail" /> */}

                
              {/* </div>
            ))}
          </div>
        ) : (
          <p>Oooops</p>
        )} */}
      </div>
    );
  }
}

export default Search;