var express = require('express');
var router = express.Router();
var Post = require('../models/post')

router.get('/', function (req, res) {
    Post.find().populate('postedBy').populate('category').exec(function(err,posts){
        res.render('index', {
            postList: posts,
            layout: 'layout'
        });
    });
    var popPosts = Post.getPopularPosts();
    console.log(popPosts);
});

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        //req.flash('error_msg','You are not logged in');
        res.redirect('/users/login');
    }
}
module.exports = router;