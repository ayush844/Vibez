import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    image: {
        type: String // Optional, URL or path to the image
    }, 
    likes: [{
        type: mongoose.Schema.ObjectId,
        ref: "User"
    }], 
    comments: [{
        type: mongoose.Schema.ObjectId,
        ref: "Comment"
    }],
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
    }
}, {
    timestamps: true
});

const Post = mongoose.model('Post', PostSchema);
export default Post;
