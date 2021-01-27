const express = require("express");
const app = express();
const config = require("./config");

// endpoints
const ImageController = require("./controllers/imageController");
app.post("/api/uploadImage", ImageController.uploadImageToS3);