let mongoose = require('mongoose');
const {DEFAULT_CONN} = require('./../config/app.config');
const {ac} = require("./../constant")


let activities = new mongoose.Schema({
    activity_name: {type: String, required: true},
    activity_logo: {type: String, required: false},
    club_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Clubs'},
    admin_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Users'},
    facilitator_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Users'},
    moderator_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Users'},
    group_id: [{type: mongoose.Schema.Types.ObjectId, ref: 'Users'}],
    associated_interest_themes: [{type: mongoose.Schema.Types.ObjectId, ref: 'InterestTheme'}],
    visibility: {type: String, required: false},
    status: {type: String, required: false},
    activity_date: {type: String, required: false},
    duration: {type: String, required: false},
    start_time: {type: String, required: false},
    end_time: {type: String, required: false},
    timezone: {type: String, required: false},
    is_all_day_event: {type: Boolean, required: false, default: false},
    short_description: {type: String, required: false},
    activity_video_link: {type: String, required: false},
    frequency: {type: String, required: false},
    monetization: {type: String, required: false},
    amount_per_session: {type: String, required: false},
    promo_code: {type: String, required: false},
    detailed_description: {type: String, required: false},
    capacity: {type: String, required: false},
    engagement_metrics: {type: Object, required: false},
    sponsor_details: {type: Object, required: false},
    updated_on: {type: Date, required: false},
    created_on: {type: Date, required: true}
})

module.exports = mongoose.model('Activities', activities)
