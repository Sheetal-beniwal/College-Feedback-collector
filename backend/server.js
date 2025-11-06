const express = require('express');
const mongoose = require('mongoose');
const Data = require('./models/data');
const app = express();

const MONGO_URL = "mongodb+srv://sheetalbeniwal60_db_user:kRprYnjFAA05lYFI@cluster0.vuurh1x.mongodb.net/?appName=Cluster0";

mongoose.connect(MONGO_URL)
.then(()=>{
    console.log("connected to db");
    app.listen(3000);

})
.catch((err)=>{
console.log(err);
})

app.set("view engine" , 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const cors = require('cors');
app.use(cors());


app.get('/',(req,res)=>{
    res.send('welcome back..');
});

app.post('/academics' , (req, res)=>{
    const data = new Data(req.body);
    data.save()
    .then(()=>{
        res.send('saved');
    })
    .catch((err)=>{
        console.log(err);
    })
})