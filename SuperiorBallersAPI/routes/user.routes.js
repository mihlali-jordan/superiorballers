"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var User = require('../models/user.model');
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
    var user = new User({
        email: req.email,
        firstName: req.firstName,
        lastName: req.lastName,
        password: req.password,
        displayName: req.displayName,
        cellNumber: req.cellNumber,
    });
    user.save()
        .then(function (result) {
        // res.status(201).json({
        //     message: 'Successfully created a new user!',
        //     result: result
        // });
        // res.sendCode(201);
        // console.log(res);
        // res.status(201).send("User has been successfully created");
        //return 'User has been successfully created';
        // return Object({ message: "User has been successfully created" });
        // return res.status(201).send({
        //     message: "User has been successfully created",
        //     statusCode: 201
        // })
        res.status(200).json({ "status": true, "result": 'Edit successful!' });
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
