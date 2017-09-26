var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CategorySchema = new Schema({
    _id: Schema.Types.ObjectId,
    name:{
        type:String,
        required:true,
        unique:true
    }
});

var Category = module.exports = mongoose.model('Category', CategorySchema);

module.exports.createCategory = function (newCategory) {
    newCategory.save();
}

module.exports.getAllCategory = function(callback){
    Category.find(callback);
}

