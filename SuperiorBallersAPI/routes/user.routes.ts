import { Router } from 'express';
import { IUser } from '../models/user.model';
const User = require('../models/user.model');
// import bcrypt from 'bcrypt';

const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const userRouter = Router();

userRouter.get('/', (req, res) => {
    return res.json('This is the user route');
})

userRouter.post("/register", (req, res: any, next) => {


    const user: IUser = new User({

        email: res.email,
        firstName: res.firstName,
        lastName: res.lastName,
        password: res.password,
        displayName: res.displayName,
        cellNumber: res.cellNumber,
    });

    user.save()
        .then((result: any) => {

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
        .catch((err: any) => {
            res.status(500).json({
                error: err
            })
        })


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

})

export default userRouter;