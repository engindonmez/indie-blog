var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var Post = require('../models/post');
var Category = require('../models/category');

router.get('/add', function (req, res) {
    Category.getAllCategory(function (err, category) {
        res.render('postAdd', {
            layout: 'adminLayout',
            categoryList: category
        });
    });
});
router.get('/:id', function (req, res) {
    var id = req.params.id;
    Post.findOneAndUpdate({
        _id: id
    }, {
        $inc: {
            viewCount: +1
        }
    }).populate('postedBy').exec(function (err, post) {
        if (err) throw err;
        res.render('post', {
            postItem: post,
            layout: 'layout'
        });
    });
});
router.post('/add', function (req, res) {
    var title = req.body.title;
    var description = req.body.description;
    var content = req.body.content;
    var bannerImageUrl = req.body.bannerImageUrl;
    var postImageUrl = req.body.postImageUrl;
    var category = [];
    if (Array.isArray(req.body.category)) {
        for (var i = 0; i < req.body.category.length; i++) {
            category.push(req.body.category[i]);
            console.log(req.body.category[i]);
        };
    }
    else {
        category.push(req.body.category);
    }
    var postedBy = req.user.id;
    // var comments = req.body.comments;

    var newPost = new Post({
        _id: new mongoose.Types.ObjectId(),
        title: title,
        description: description,
        bannerImageUrl: bannerImageUrl,
        postImageUrl: postImageUrl,
        content: content,
        category: category,
        postedBy: postedBy
    });

    Post.createPost(newPost, function (err, post) {
        if (err) throw err;
        console.log(post);
        res.redirect('/');
    });
});

module.exports = router;
