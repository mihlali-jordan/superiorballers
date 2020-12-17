import express = require('express');
//import cors from 'cors';
const cors = require('cors');
const bodyParser = require('body-parser')
import { Router } from 'express';
import mongoose from "mongoose";
import "dotenv/config"

//routes
import userRouter from './routes/user.routes';

//Create a new express instance
const app: express.Application = express();

app.get('/', function (req, res) {

    res.send('Hello World');

});

// //get router
// var router = express.Router();

//Database
mongoose.connect(`${process.env.MONGO_URI}`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
    .then(() => {
        console.log("Connected to MongoDB")
    })
    .catch(() => {
        console.log("Connection to Database has failed")
    })


var corsOptions = {
    origin: '*',
    credentials: true,
    methods: '*'
};



const routes = Router();

export default routes;

app.use(routes);

app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors(corsOptions));

app.use("/user", userRouter);



routes.use('/user', userRouter);
routes.use(cors(corsOptions));

//use cors middleware
// router.use(cors(options));

app.listen(3000, function () {

    console.log('App is listening on port 3000!');

})