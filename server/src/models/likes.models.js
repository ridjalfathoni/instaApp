const { Schema } = require("mongoose");

module.exports = (mongoose) => {
    const Likes = mongoose.model('likes', mongoose.Schema({
        id_posts: {
            type: Schema.Types.ObjectId,
            ref: 'posts'
        },
        id_users: [{
            type: Schema.Types.ObjectId,
            ref: 'users'
        }],
        
    }))

    return Likes;
}