const express = require("express");
const router = express.Router();
const ListModel = require("./schema")
const UserModel = require("../authorization/schema")

router.get("/:username", async(req, res, next)=>{
    try {
        const username = req.params.username
        const user = await UserModel.findOne(username)
        if (user) {
            res.send(user)
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



module.exports = router
