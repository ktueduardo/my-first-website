const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    code: {
        type: String,
        required: true,
        trim: true
    },
    puppyImage: {
        type: String,
        required: true
    },
    fatherName: {
        type: String,
        required: true
    },
    motherName: {
        type: String,
        required: true
    },
    sex: {
        type: String,
        required: true,
    },
    born: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true
    },
    rg:{
        type: String,
        required: true
    },
    chip:{
        type: Boolean,
        required: true
    },
    vaccine:{
        type: String,
        required: true
    },
    dewormed: {
        type: Boolean,
        required: true
    },
    cbkc: {
        type: Boolean,
        required: true
    },
    warranty:{
        type: Boolean,
        required: true
    }



})

module.exports = mongoose.model('puppyModel', schema)