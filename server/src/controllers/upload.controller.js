const db = require('../models');
const Posts = db.posts;
const helper = require('../helper');
const fs = require('fs');
const cloudinary = require('../cloudinary');
const upload = require('../multer');
const uploadsRoutes = require('../routes/uploads.routes');

module.exports = {
    createPosts(req, res) {
        const title = req.body.title;
        const description = req.body.description
        console.log("title", title);
        console.log("description", description);
        console.log("Posts", Posts);
        const post = new Posts({
            title: title,
            description: description
        })
        post.save()
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json({message: err})
            })
    },
    uploads(req, res) {
        upload(req, res, async (err) => {
            const uploader = async (path) => await cloudinary.uploads(path, 'Images');
            if (err) {
                res.sendStatus(403);
            } else {
                if (req.file == undefined) {
                    res.status(400).send({
                        message: "Error: No file Selected!"
                    });
                } else {
                    const urls = []
                    
                    const path  = req.file.path;
                    const newPath = await uploader(path);

                    urls.push(newPath)
                    fs.unlinkSync(path)
                    res.status(200).json({
                        message: 'upload success',
                        data: urls
                    })
                }
            }
        } )
    }
}