import { Document, Model, model, Types, Schema, Query, Mongoose } from 'mongoose';
//var uniqueValidator = require('mongoose-unique-validator')
//import uniqueValidator from 'mongoose-unique-validator';
const mongoose = require('mongoose');

//Schema

const userSchema = new Schema({

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

export interface IUser extends Document {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    cellNumber: string;
    displayName: string;
}

//userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);