"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
//import cors from 'cors';
var cors = require('cors');
var bodyParser = require('body-parser');
var express_1 = require("express");
var mongoose_1 = __importDefault(require("mongoose"));
require("dotenv/config");
//routes
var user_routes_1 = __importDefault(require("./routes/user.routes"));
//Create a new express instance
var app = express();
app.get('/', function (req, res) {
    res.send('Hello World');
});
// //get router
// var router = express.Router();
//Database
mongoose_1.default.connect("" + process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})
    .then(function () {
    console.log("Connected to MongoDB");
})
    .catch(function () {
    console.log("Connection to Database has failed");
});
var corsOptions = {
    origin: '*',
    credentials: true,
    methods: '*'
};
var routes = express_1.Router();
exports.default = routes;
app.use(routes);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors(corsOptions));
app.use("/user", user_routes_1.default);
routes.use('/user', user_routes_1.default);
routes.use(cors(corsOptions));
//use cors middleware
// router.use(cors(options));
app.listen(3000, function () {
    console.log('App is listening on port 3000!');
});
