const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model("User");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../keys');
const requireLogin = require('../middleware/requireLogin');


router.get('/protected',requireLogin,(req,res) => {
    res.send("Successful");
});


router.post('/signup', (req,res) => {
    const {name,email,password} = req.body;

    if(!email || !password || !name){
        res.status(422).json({error: "Please fill all fields"});
    }
    
    User.findOne({email: email})
        .then((savedUser) => {
            if(savedUser){
                res.status(422).json({error: "User already exists"});
            }

            bcrypt.hash(password, 12)
                .then(hashedpassword => {

                    const user = new User({
                        email,
                        password: hashedpassword,
                        name
                    });
                    user.save()
                        .then(user => {
                            res.send({message:"Saved Successfully"});
                        })
                        .catch(err => {
                            console.log(err); 
                        });
                })            
        })
        .catch(err => {
            console.log(err);
        });
});


router.post('/signin', (req,res) => {
    const {email,password} = req.body;

    if(!email || !password){
        res.status(422).json({error: "Add valid email or password"});
    }

    User.findOne({email:email})
        .then(savedUser => {
            if(!savedUser){
                res.status(422).json({error: "Invalid email or password"});
            }
            bcrypt.compare(password,savedUser.password)
                .then(doMatch => {
                    if(doMatch){
                        //res.json({message:"Signed in successfully"});
                        const token = jwt.sign({_id:savedUser._id}, JWT_SECRET);
                        res.json({token});
                    }
                    else{
                        return res.status(422).json({error: "Invalid Email or Password"});
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        })
});

module.exports = router;