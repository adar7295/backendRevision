const express = require('express');
const Model = require('../models/productModel');

const router=express.Router();

//add
router.post('/add',(req,res)=>{
    console.log(req.body);
    new Model(req.body).save()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

//getall
router.get('/getall',(req,res)=>{
    Model.find()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

//getbyid
router.get('/getbyid/:id',(req,res)=>{
    console.log(req.params.id);
    Model.findById(req.params.id)
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });  
});

//update
router.put('/update/:id',(req,res)=>{
    Model.findByIdAndUpdate(req.params.id, req.body,{new:true})
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

//delete
router.delete('/delete/:id',(req,res)=>{
    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})

module.exports=router;