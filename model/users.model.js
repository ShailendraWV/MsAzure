let mongoose = require('mongoose');
const {DEFAULT_CONN} = require('./../config/app.config');
const {ac} = require("./../constant")


let users = new mongoose.Schema({
    first_name: {type: String, required: true},
    last_name: {type: String, required: false},
    email_id: {type: String, required: true},
    country_code: {type: String, required: false},
    mobile_number: {type: String, required: false},
    user_name: {type: String, required: false},
    user_role_id: {type: mongoose.Schema.Types.ObjectId, ref: 'UserRole'},
    profile_image: {type: String, required: false},
    joined_date: {type: Date, required: false},
    joined_date_timestamp: {type: Date, required: false},
    interest_id: [{type: mongoose.Schema.Types.ObjectId, ref: 'InterestTheme'}],
    club_id: [{type: mongoose.Schema.Types.ObjectId, ref: 'Clubs'}],
    activity_id: [{type: mongoose.Schema.Types.ObjectId, ref: 'Activities'}],
    activity_attendance: [{type: Object, required: false}],
    _21cha_id: {type: String, required: false},
    country_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Country'},
    city_id: {type: mongoose.Schema.Types.ObjectId, ref: 'City'},
    short_bio: {type: String, required: false},
    profile_video_link: {type: String, required: false},
    followers_id: [{type: mongoose.Schema.Types.ObjectId, ref: 'Users'}],
    following_id: [{type: mongoose.Schema.Types.ObjectId, ref: 'Users'}],
    blocked_members_id: [{type: mongoose.Schema.Types.ObjectId, ref: 'Users'}],
    professional_qualification: {type: String, required: false},
    memberships: {type: String, required: false},
    experience: {type: String, required: false},
    expertise_special_interest: {type: String, required: false},
    engagement_metrics: {type: Object, required: false},
    is_kyc: {type: Boolean, default: false},
    membership_category: {type: String, required: false},
    social_links: {type: Object, required: false},
    updated_on: {type: Date, required: false},
    created_on: {type: Date, required: true},
    status: {type: String, required: false},
})

module.exports = mongoose.model('Users', users)
