const mongoose = require('mongoose');
//  const dbURL='mongodb+srv://mcrac393:MeXDrEw5t71sa7XE@cluster0.anyd9st.mongodb.net/';

const dbURL = 'mongodb+srv://tripurari:Tripurari@cluster0.aptcnle.mongodb.net/ecommerceApi?retryWrites=true&w=majority';




//  const dbURL='mongodb://127.0.0.1:27017/ecommerceApi';

// 'mongodb://127.0.0.1/ecommerceApi'
mongoose.connect(dbURL)
  .then(() => {
    console.log('Successfully connected to the database');
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });

 