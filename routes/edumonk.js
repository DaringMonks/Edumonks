const express = require("express");
const router = express.Router();
const Register = require('../Models/registermodel');
const Query = require('../Models/querymodel');
const passwordHash = require('password-hash');


router.get('/',(req,res)=>{
    res.render('index');
});

router.post('/form',(req,res)=>{
  Query.create(req.body,(err)=>{
      if(err) throw err;
      else{
          console.log('Query Inserted');
          res.redirect('/');
      }
  });
});

router.get('/team',(req,res)=>{
    res.render('team');
});

router.get('/gallery',(req,res)=>{
    res.render('gallery');
});

router.get('/social',(req,res)=>{
    res.render('social');
});

router.get('/contact',(req,res)=>{
    res.render('social');
});

router.get('/n-t',(req,res)=>{
    res.render('nt');
});

router.get('/e-t',(req,res)=>{
    res.render('et');
});

router.get('/c-l',(req,res)=>{
    res.render('cl');
});

router.get('/s-c',(req,res)=>{
    res.render('sc');
});

router.get('/govt',(req,res)=>{
    res.render('govt');
});

router.get('/c-c',(req,res)=>{
    res.render('cc');
});


module.exports = router;
