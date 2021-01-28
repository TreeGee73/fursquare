import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


  

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
                {/* <h2>{item.displayLink}</h2> */}
                <Card>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.displayLink}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary"><a href={item.formattedUrl}>Learn More</a>
          
        </Button>
      </CardActions>
    </Card>
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