const mongoose = require('mongoose');

const classesSchema = new mongoose.Schema({
    name: String,
}, { versionKey: false });

mongoose.model('classesModel', classesSchema, 'classes');