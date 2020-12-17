"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
//var uniqueValidator = require('mongoose-unique-validator')
//import uniqueValidator from 'mongoose-unique-validator';
var mongoose = require('mongoose');
//Schema
var userSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    displayName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
    cellNumber: {
        type: String,
        required: true,
    }
});
//userSchema.plugin(uniqueValidator);
module.exports = mongoose.model("User", userSchema);
