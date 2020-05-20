const mongoose = require('mongoose');

const studentsSchema = new mongoose.Schema({
    name: String,
    age: {
        type: String
    },
    gender: String,
    classesId: {
        type: mongoose.Schema.Types.ObjectId,
        // ref 用于设置关联集合的模型名称
        ref: 'classesModel'
    },
    imagePath: String
}, { versionKey: false });

mongoose.model('studentsModel', studentsSchema, 'students');