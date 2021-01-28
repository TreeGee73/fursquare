import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


<<<<<<< HEAD

class Search extends Component {

=======
class Search extends Component {
>>>>>>> 8acc10740b694be81f00f51e15ca58526c18317a
  state = {
    searchValue: "",
    items: [],
  };

  handleOnChange = (event) => {
    this.setState({ searchValue: event.target.value });
  };

  handleSearch = () => {
    this.makeApiCall(this.state.searchValue);
  };

  makeApiCall = searchInput => {
    var searchUrl = `https://www.googleapis.com/customsearch/v1?key=AIzaSyBKw9foGUzpMEVS0VV_tBxCbkWs1PxQyQk&cx=3142a4046227fd8fe&q=${searchInput}`;
    fetch(searchUrl)
<<<<<<< HEAD
      .then(response => {

=======
      .then((response) => {
>>>>>>> 8acc10740b694be81f00f51e15ca58526c18317a
        return response.json();
      })
      .then(jsonData => {
             this.setState({
            items: jsonData.items,
            searchValue: ""})
           console.log(jsonData)
            console.log(jsonData.items[0])
<<<<<<< HEAD





      });


      }







  render() {
    return (
      <div id="main" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/images/login_1.jpg"})`}}>
        <h1>Top Hit Service</h1>
=======
        
      });
      
      }

  render() {
    return (
      <div id="main" >
        <h1>Search Service</h1>
>>>>>>> 8acc10740b694be81f00f51e15ca58526c18317a
        <input
          name="text"
          type="text"
          placeholder="Search for Service"
          onChange={(event) => this.handleOnChange(event)}
          value={this.state.searchValue}
        />
        <button onClick={this.handleSearch}>Enter</button>
        {this.state.items !== [] ? (
          <div id="items-container">
            {this.state.items.map((item, index) => (
              <div class="single-meal" key={index}>
<<<<<<< HEAD

                <Card style={{height: "140px", maxWidth: "345px" ,border: "1px solid", marginTop: "10px", marginBottom: "10px", display: "block", marginLeft: "auto", marginRight: "auto"}}>
=======
                
                <Card style={{height: "140px", maxWidth: "345px" ,border: "1px solid", marginTop: "10px", marginBottom: "10px", display: "block"}}>
>>>>>>> 8acc10740b694be81f00f51e15ca58526c18317a
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.displayLink}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {item.title}
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
          <p>You need help! This search is powered by Google</p>
        )}
<<<<<<< HEAD
      <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/images/login_1.jpg"})`, height: "100vh"}}></div>
=======
>>>>>>> 8acc10740b694be81f00f51e15ca58526c18317a
      </div>
    );
  }
}

export default Search;
