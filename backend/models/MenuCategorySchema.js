const mongoose = require('mongoose')

const { Schema } = mongoose;

const menuCategorySchema = new mongoose.Schema({
    categoryName: String,
},{
    collection: 'FoodCategory' // Specify the collection name
});

module.exports = mongoose.model('FoodCategory',menuCategorySchema);
