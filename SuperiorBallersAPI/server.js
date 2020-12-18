const express = require('express')
const connectDB = require('./config/db')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

// initialise your express app
const app = express();

// connect to mongoDB
connectDB();

// pass middleware to your app
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())

// define your routes
app.use('/api/users', require('./routes/users.routes'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));