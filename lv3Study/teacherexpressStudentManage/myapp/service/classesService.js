const { addClasses, getClasses } = require('../dao/classesDao');
module.exports.addClasses = async name => {
    const data = await addClasses(name);
    if (data._id) {
        return true;
    }
    return false;
}


module.exports.getClasses = async () => {
    return await getClasses();
}

