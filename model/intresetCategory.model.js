let mongoose = require('mongoose');
const {DEFAULT_CONN} = require('./../config/app.config');
const {ac} = require("./../constant")


let interestCategory = new mongoose.Schema({
    interest_category: {type: String, required: true},
    interest_themes_ids: [{type: mongoose.Schema.Types.ObjectId, ref: 'InterestTheme'}],
    updated_on: {type: Date, required: false},
    created_on: {type: Date, required: true},
    is_deleted: {type: Boolean, required: false, default: false}

})

module.exports = mongoose.model('InterestCategory', interestCategory)
