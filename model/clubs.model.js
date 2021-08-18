let mongoose = require('mongoose');
const {DEFAULT_CONN} = require('./../config/app.config');
const {ac} = require("./../constant")


let club = new mongoose.Schema({
    club_name: {type: String, required: true},
    admin_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Users'},
    facilitator_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Users'},
    moderator_id: [{type: mongoose.Schema.Types.ObjectId, ref: 'Users'}],
    city_id: {type: mongoose.Schema.Types.ObjectId, ref: 'City'},
    club_logo: {type: String, required: false},
    visibility: {type: String, required: false},
    associated_interest_themes: [{type: mongoose.Schema.Types.ObjectId, ref: 'InterestTheme'}],
    short_description: {type: String, required: false},
    club_video_link: {type: String, required: false},
    capacity: {type: String, required: false},
    status: {type: String, required: false},
    detailed_description: {type: String, required: false},
    engagement_metrics: {type: Object, required: false},
    sponsor_details: {type: Object, required: false},
    updated_on: {type: Date, required: false},
    created_on: {type: Date, required: true},
})

module.exports = mongoose.model('Clubs', club)
