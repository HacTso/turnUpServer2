/*
 * ITEM MODEL 
 */
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
//create schema
var DrinkSchema = new mongoose.Schema({
    strDrink: String,
    strIngredient1: String,
    strIngredient2: String,
    strIngredient3: String,
    strIngredient4: String,
    strIngredient5: String,
    strIngredient6: String,
    strMeasure1: String,
    strMeasure2: String,
    strMeasure3: String,
    strMeasure4: String,
    strMeasure5: String,
    strMeasure6: String,
    strInstructions: String
},{timestamps: true});

//register schema as model
var Drink = mongoose.model('Drink', DrinkSchema);