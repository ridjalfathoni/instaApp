const { Schema } = require("mongoose");

module.exports = (mongoose) => {
    const Posts = mongoose.model('posts', mongoose.Schema({
        caption: {
            type: String
        },
        img_url: {
            type: String
        },
        id_users: {
            type: Schema.Types.ObjectId,
            ref: 'users'
        },
        id_comments: [{
            type: Schema.Types.ObjectId,
            ref: 'comments'
        }],
        id_likes: [{
            type: Schema.Types.ObjectId,
            ref: 'likes'
        }]
    }))

    return Posts;
}