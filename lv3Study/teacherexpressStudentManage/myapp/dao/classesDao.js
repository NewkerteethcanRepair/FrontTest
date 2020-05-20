const mongoose = require('mongoose');
const classesModel = mongoose.model('classesModel');

module.exports.addClasses = async name => {
    return await classesModel.create(name);
}

module.exports.getClasses = async () => {
    return await classesModel.find();
}