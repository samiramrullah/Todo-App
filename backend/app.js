const express=require('express');
const morgan=require('morgan');
const bodyParser=require('body-parser');
const mongooge=require('mongoose');
const app=express();

require('dotenv').config();
app.use(morgan('dev'));

//Routes
const registerRoute=require('./api/Routes/userManagement/auth')

// database connection
mongooge.connect(process.env.connectionString)
.then(()=>{
    console.log("Connected to database");
})
.catch((err)=>console.log("Error while connecting to database"))
mongooge.Promise=global.Promise;


// cors
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins (replace with specific domains in production)
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Specify allowed methods
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization'); // Specify allowed headers
    next();
});

// parsing the body
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.use('/api/user/',registerRoute)


//Error Hadling

// if no paths matched
app.use((req, res, next) => {
    const error = new Error('No matching paths')
    error.status = 404;
    next(error);
})

// if methods not matched

app.use((error, req, res, next) => {
    res.status(error.status || 500)[
        res.json({
            error: {
                message: error.message,
            }
        })
    ]
})


module.exports=app;