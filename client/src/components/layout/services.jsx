import React, { Component } from "react";
import ImageUploader from 'react-images-upload';
import axios from "axios";

class Search extends Component {
    constructor(props) {
        super(props);
         this.state = { pictures: [] };
         this.onDrop = this.onDrop.bind(this);
         this.uploadImages = this.uploadImages.bind(this)
    }
    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }
    uploadImages() {
        console.log(this.state.pictures)
        let uploadPromises = this.state.pictures.map(image => {
            let data = new FormData();
            data.append("image", image, image.name)
            return axios.post("/api/uploadImage", data);
        })
        axios.all(uploadPromises).then(results=>{
            console.log(results);
            console.log("server response:");
        })
        // .catch(err => {
        //     console.log(err); 
        // })
    }
    render() {

        return (

            <div>
                <h1>Welcome to FurSearch!</h1>;
                <input name="text" type="text" placeholder="Search" />
                <button>Search</button>
                <ImageUploader
                withIcon={true}
                withPreview={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.png', '.gif']}
                maxFileSize={5242880}
            />
            <button onClick={this.uploadImages}>Upload Images</button>
            </div>
            

        );
    }
}

export default Search;