const mongoose = require('mongoose');
const User = require('./models/user');

mongoose.connect('mongodb+srv://Demo123321:Demo12345@demo.2sjnv0g.mongodb.net/');

async function queryDataByName(name) {
  try {
    const result = await User.find({ name });
    if (result.length === 0) {
      console.log('No matching records found.');
      return;
    }
    result.forEach(user => {
      console.log(`Name: ${user.name}, Email: ${user.email}`);
    });
  } catch (error) {
    console.error('Error querying data:', error);
  }
  
}
const nameToQuery = "harry";
queryDataByName(nameToQuery);