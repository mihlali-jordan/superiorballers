"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_model_1 = __importDefault(require("../models/user.model"));
// import bcrypt from 'bcrypt';
var bcrypt = require('bcrypt');
var bodyParser = require('body-parser');
// create application/json parser
var jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var userRouter = express_1.Router();
userRouter.get('/', function (req, res) {
    return res.json('This is the user route');
});
userRouter.post("/register", function (req, res, next) {
    var user = new user_model_1.default({
        email: res.email,
        firstName: res.firstName,
        lastName: res.lastName,
        password: res.password,
        displayName: res.displayName,
        cellNumber: res.cellNumber,
    });
    //UdBHf5xTBhaQtN3GRZGv
    user.save()
        .then(function (result) {
        res.status(201).json({
            message: 'Successfully created a new user!',
            result: result
        });
        // res.sendCode(201);
        // console.log(res);
        // res.status(201).send("User has been successfully created");
        //return 'User has been successfully created';
        // return Object({ message: "User has been successfully created" });
        // return res.status(201).send({
        //     message: "User has been successfully created",
        //     statusCode: 201
        // })
        // return res;
    })
        .catch(function (err) {
        res.status(500).json({
            error: err
        });
    });
    // bcrypt.hash(req.body.password, 10)
    //     .then((hash: string) => {
    //         const user = new User({
    //             email: req.body.email,
    //             firstName: req.body.firstName,
    //             lastName: req.body.lastName,
    //             password: hash,
    //             displayName: req.body.displayName,
    //             cellNumber: req.body.cellNumber,
    //         });
    //         user.save()
    //             .then((res: any) => {
    //                 res.status(201).json({
    //                     message: 'Successfully created a new user!',
    //                     result: res
    //                 });
    //             })
    //             .catch((err: any) => {
    //                 debugger;
    //                 res.status(500).json({
    //                     error: Error
    //                 })
    //             })
    //     })
});
exports.default = userRouter;
