const { Schema } = require("mongoose");

module.exports = (mongoose) => {
    const Comments = mongoose.model('comments', mongoose.Schema({
        id_user: [{
            type: Schema.Types.ObjectId,
            ref: 'users'
        }],
        id_post: {
            type: Schema.Types.ObjectId,
            ref: 'posts'
        },
        comments: {
            type: String
        }
    }))

    return Comments;
}