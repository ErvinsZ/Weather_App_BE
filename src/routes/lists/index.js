const express = require("express");
const router = express.Router();
const ListModel = require("./schema")
const UserModel = require("../authorization/schema")

router.get("/:username", async(req, res, next)=>{
    try {
        const username = req.params.username
        const city = await ListModel.findOne(username)
        if (city) {
            res.send(city)
          } else {
            const error = new Error()
            error.httpStatusCode = 404
            next(error)
          }
    } catch(error){
        console.log(error)
        next("Problem occured while reading users list")
    }
})

router.post("/:username/", async (req, res, next) => {
    try{
     const newList = new ListModel(req.body)
     const response = await newList.save()
     res.status(201).send(response)
    }catch(error){
     next(error)
    }
     
  })



module.exports = router
