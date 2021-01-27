import React, { Component } from "react";


class Search extends Component {
  state = {
    searchValue: "",
    info: []
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
          console.log(response.json())
        // return response.json();
      })
      .then(jsonData => {
        this.setState({ info: jsonData.info });
      });
  };

  render() {
    return (
      <div id="main">
        <h1>Services</h1>
        <input
          name="text"
          type="text"
          placeholder="Search for Services"
          onChange={event => this.handleOnChange(event)}
          value={this.state.searchValue}
        />
        <button onClick={this.handleSearch}>Enter</button>
        {this.state.meals ? (
          <div id="meals-container">
            {this.state.meals.map((meal, index) => (
              <div className="single-meal" key={index}>
                <h2>{meal.strMeal}</h2>
                <img src={meal.strMealThumb} alt="meal-thumbnail" />
              </div>
            ))}
          </div>
        ) : (
          <p>Try searching for a meal</p>
        )}
      </div>
    );
  }
}

export default Search;