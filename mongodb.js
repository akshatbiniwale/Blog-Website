const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/blogDB")
    .then(() => {
        console.log("MongoDb connected");
    })
    .catch((error) => {
        console.log("MongoDb failed to connect: ", error);
    });

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    } 
});

const blog = new mongoose.model("content", blogSchema);

module.exports = blog