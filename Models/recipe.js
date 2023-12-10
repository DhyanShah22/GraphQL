const mongoose = require('mongoose')

const Schema = mongoose.Schema

const recipeSchema = new Schema({
    RecipeName: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    thumpsUp: {
        type: Number,
        required: true
    },
    thumpsDown: {
        type: Number,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Recipe', recipeSchema)