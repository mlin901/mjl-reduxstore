const mongoose = require('mongoose');

// When seeding the DB, the following mongoose.connect line works for the local MongoDB database. To 
// seed the MongoDB Atlas database, use the following, replacing connect_string with
// the connect string you get from MongoDb Atlas (i.e., the connect string you
// have to supply to Heroku):
//        mongoose.connect('connect_string', {
//
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/mernshopping', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

module.exports = mongoose.connection;
