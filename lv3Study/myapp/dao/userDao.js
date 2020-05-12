const mongoose = require('mongoose');

let mongooseModel = mongoose.model('users');

module.exports.login = async function(user) {
    return await mongooseModel.find(user);
};

module.exports.register = async function(user){
    return await mongooseModel.create(user);
}

module.exports.verify = async function(user){
    return await mongooseModel.find(user);
}