const express = require('express')
const mongoose = require('mongoose');
const app = express()
const Product = require('./models/product.model.js')
const ProductRoute = require('./routes/product.route.js')
//middleware
app.use(express.json());
app.use(express.urlencoded({extended : false}))


//index page
app.get('/', (req, res) => {
    res.send('Hello World !!!')
}); 

//routes
app.use('/api/products', ProductRoute);

mongoose.connect('mongodb+srv://abhishekpakhare1997:pakhare1069@backenddb.n2uafdk.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB')
.then(() => {
    console.log(`Connected to the database`);
    app.listen(3000, () =>{
        console.log(`Server is running on port 3000`);
    })
    
})
.catch(() => {
    console.log(`Failed to connect to the server`);
})
  