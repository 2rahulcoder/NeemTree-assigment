/* const mongoose = require('mongoose');

 //Set up MongoDB connection
 mongoose.connect('mongodb://localhost:27017/excel-to-mongo', {
   useNewUrlParser: true,
   useUnifiedTopology: true
 });

 //mDefine a schema for the data
 const dataSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    phone: String,
    dob: Date,
    workExperience: String,
    resumeTitle: String,
    currentLocation: String,
    postalAddress: String,
    currentEmployer: String,
    currentDesignation: String,



 });


// Define a model for the data
 const Data = mongoose.model('Data', dataSchema);

 module.exports = Data;*/


 const mongoose = require('mongoose');
const moment = require('moment');

//Set up MongoDB connection
mongoose.connect('mongodb://localhost:27017/excel-to-mongo', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Define a schema for the data
const dataSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  phone: String,
  dob: Date,
  workExperience: String,
  resumeTitle: String,
  currentLocation: String,
  postalAddress: String,
  currentEmployer: String,
  currentDesignation: String,
});

// Define a virtual property for formatted dob
dataSchema.virtual('formattedDob').get(function () {
  return moment(this.dob).format('DD MMM YYYY');
});

// Define a model for the data
const Data = mongoose.model('Data', dataSchema);

module.exports = Data;
