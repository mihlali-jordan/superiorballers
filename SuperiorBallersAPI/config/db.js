// this file exists solely to abstract the MongoDB database initialisation
const mongoose = require('mongoose')
const { connect } = require('../routes/users.routes')
// Thought the issue was with the uri being stored as an environment variable – might because I do not run mongo db locally on my machine
const mongo_uri =
  'mongodb://shanahjr:Bobona21@localhost:27017/superiorballers?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false'

const connectDB = async () => {
  try {
    await mongoose.connect(mongo_uri, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })

    console.log(`MongoDB Connected`)
  } catch (error) {
    console.log(`Could not establish connection`)
  }
}

module.exports = connectDB
