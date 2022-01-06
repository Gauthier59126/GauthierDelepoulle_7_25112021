const webpack = require("webpack");
const path = require("path");

let config = {
    entry:{
        "recette" : "./js/recette.js",
        "recherche" : "./js/recherche.js"
    } ,
    output: {
      path: path.resolve(__dirname, "./public"),
      filename: "./[name].bundle.js"
    }
  }
  
  module.exports = config;