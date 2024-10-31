import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    username: {
        type: 'String',
        required: true,
        unique: true
    },
    email: {
        type: 'String',
        required: true,
        unique: true
    },
    password: {
        type: 'String',
        required: true
    },
    followers: [{type: mongoose.Schema.ObjectId, ref: "User"}],
    following: [{type: mongoose.Schema.ObjectId, ref: "User"}],
    posts: [{type: mongoose.Schema.ObjectId, ref: "Post"}]
}, {timestamps: true})



const User = mongoose.model('User', UserSchema);

export default User;
