var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PostSchema = new Schema({
    _id: Schema.Types.ObjectId,
    title: {
        type: String,
        require: true,
        unique: true
    },
    bannerImageUrl:{
        type:String,
        required:true
    },
    postImageUrl:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    content: {
        type: String,
        require: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
    category: [{
        type: Schema.Types.ObjectId,
        ref:'Category'
    }],
    postedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    comments: [{
        text: String,
        postedBy: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    }],
    viewCount:{
        type: Number,
        default: 0
    }
});

var Post = module.exports = mongoose.model('Post', PostSchema);

module.exports.createPost = function (newPost,callback) {
    newPost.save(callback);
}

module.exports.getPopularPosts = function(callback){
    Post.find(callback);
}

