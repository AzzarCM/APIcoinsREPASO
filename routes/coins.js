var express = require('express');
var router = express.Router();
var coins = require('../models/Coin');

//GET COINS     

router.get('/', function(req,res, next){
    coins.find({}, (err,docs)=>{
        if(err){
            res.json({
                "success": true
            })
        }else{
            res.json({
                "success":true,
                docs
            })
        }
    })
});

router.get("/:id", function(req,res,next){
    var id = req.params.id || "";
    if(id === ""){
        res.json({
            "success":false
        });
    }else{
        coins.findById(id,(err,coin)=>{
            if (err){
                res.json({"success":false});
            }else{
                res.json({
                    "success":true,
                    coin
            })
            }
        })
    }
});

//PUT COINS

router.put("/", function(req,res,next){
    let data = {
        name: req.body.name,
        value: req.body.value
    }
    var coin = new coins(data);
    coin.save((err, iCoin)=>{
        if(err){
            res.json({

                "success": false
            });
        }else{
            res.json({
                "success":true,
                iCoin
            })
        }
    })
});

module.exports = router;