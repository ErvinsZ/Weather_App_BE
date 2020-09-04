const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const ListSchema = new Schema({
    city:{
        type:String,
        require: true
    }
})

const ListModel = mongoose.model("user", ListSchema);
module.exports = ListModel;