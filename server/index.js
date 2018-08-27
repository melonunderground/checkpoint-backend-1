let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let fs = require('fs');
let fetch = require('node-fetch');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://dane:dane123@ds227352.mlab.com:27352/checkpoint-backend-1');


let MessageRoutes = require('./routes/MessageRoutes');
let OrderRoutes = require('./routes/OrderRoutes');
let TaskRoutes = require('./routes/TaskRoutes');


const app = express();
app.use(bodyParser.json());

app.use(MessageRoutes);
app.use(OrderRoutes);
app.use(TaskRoutes);

app.get("/dateTime", function (request,response) {
    response.json(Date())
})

fs.readFile("data.csv",'utf8', function (err,data) {
    if (err) {
        return console.log(err);
    }
   const csv = data.split(",")
   const newComments = csv[3]


app.get("/newComments", function(request,response) {
    response.json(Number(newComments.slice(8)))
   })
app.get("/newTasks", function(request,response) {
    response.json(Number(csv[4]))
   })
app.get("/newOrders", function(request,response) {
    response.json(Number(csv[5]))
   })
app.get("/tickets", function(request,response) {
    response.json(Number(csv[6]))
   })
})

app.get("/foxes", function(request,response) {
    fetch('https://randomfox.ca/floof/')
    .then(response => response.json())
    .then(data => {
        response.json(data.image);
    });
})

app.listen(3001, (err) => {
if (err) {
 return console.log('Error', err);
}
console.log('Web server is now living in apartment 3001');
});