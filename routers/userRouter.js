const express = require('express');
const Model = require('../models/userModel');

const router = express.Router();

router.post('/add', (req, res) => {
    console.log(req.body);
new Model(req.body).save()
.then((result) => {
    res.status(200).json(result);
}).catch((err) => {
   console.log(err);
   res.status(500).json(err); 
});

});

// getall
router.get('/getall', (req, res) => {
   Model.find()
   .then((result) => {
    res.status(200).json(result);
   }).catch((err) => {
    console.log(err);
    res.status(500).json(err);
   });
});
//: denotes url parameter
router.get('/getbyemail/:email',(req,res)=>{
    console.log(req.params.email);
    Model.find({email: req.params.email})
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err)
    });
}) 

router.get('/getbyid/:id',(req,res) => { 
    console.log(req.params.id);
    Model.findById(req.params.id)
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err)
    });
})

// update
router.get('/update', (req, res) => {
    res.send('response from user update');
});

// delete
router.get('/delete', (req, res) => {
    res.send('response from user delete');
});

module.exports = router;