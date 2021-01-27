// import { json } from "body-parser";
import React, { Component } from "react";


class Search extends Component {

    state = {
        search: '',
        dogs: []
    };

    handleOnChange = event => {
        this.setState({ search: event.target.value });
    };

    handleSearch = () => {
        this.makeApiCall(this.state.search);
    };

    makeApiCall = searchInput => {
        const searchUrl = '';
        fetch(searchUrl)
            .then(response => {
                return response.json();
            })
            .then(jsonData => {
                this.setState({ dogs: jsonData.dogs });
            });
    };

    render() {

        return (

            <div id="main">
                <h1>Welcome to FurSearch!</h1>;
                <input name="text" type="text" placeholder="Search" />
                <button>Search</button>
                <input name="text" type="text" placeholder="Search" onChange={event => this.handleOnChange(event)} value={this.state.search} />
                <button onClick={this.handleSearch}>Search</button>
                </div>
            //     {this.state.dogs ? (
            //         <div id="dogs-container">
            //             {this.state.dogs.map((dog, index) => (
            //                 <div class="single-dog" key={index}>
            //                     <h2>{dog.strDog}</h2>

            // ))}
                
                        );
    }
}

export default Search;
