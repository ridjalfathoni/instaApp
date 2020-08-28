const db = require('../models');
const Posts = db.posts;
const helper = require('../helper');

module.exports = {
    createPosts(req, res) {
        const {caption, imageUrl} = req.body;
        
        const post = new Posts({
            caption: caption,
            img_url: imageUrl
        })

        post.save()
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json({message: err})
            })
    }
}