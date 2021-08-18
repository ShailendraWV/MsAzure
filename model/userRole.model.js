let mongoose = require('mongoose');
const {DEFAULT_CONN} = require('./../config/app.config');
const {ac} = require("./../constant")


let userRoleModel = new mongoose.Schema({
    user_role: {type: String, required:true},
    updated_on: {type: Date, required: false},
    created_on: {type: Date, required: true},
    is_deleted: {type: Boolean, required: false, default: false}
})

module.exports = mongoose.model('UserRole', userRoleModel)
