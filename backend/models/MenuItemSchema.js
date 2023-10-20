
const mongoose = require('mongoose')

const { Schema } = mongoose;
const menuItemSchema = new mongoose.Schema({
    categoryName: String,
    items: [
        {
            name: String,
            description: String,
            sizes: {
                small: Number,
                medium: Number,
                large: Number,
            },
            image: String,
        },
    ],
},{
    collection: 'FoodMenu' // Specify the collection name
});

module.exports = mongoose.model('FoodMenu',menuItemSchema);