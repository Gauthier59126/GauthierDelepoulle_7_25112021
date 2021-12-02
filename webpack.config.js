const webpack = require("webpack");
const path = require("path");

let config = {
    entry:{
        "recette" : "./js/recette.js",
//        "page" : "./js/page.js",
//        "nom" : "./js/nom.js",
//        "galerie" : "./js/galerie.js",
    } ,
    output: {
      path: path.resolve(__dirname, "./public"),
      filename: "./[name].bundle.js"
    }
  }
  
  module.exports = config;