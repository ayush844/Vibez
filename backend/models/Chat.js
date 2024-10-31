import mongoose from "mongoose";

const ChatSchema = new mongoose.Schema({
    sender: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
    },
    receiver: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
    },
    message: {
        type: String,
        required: true
    },
    read: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

const Chat = mongoose.model('Chat', ChatSchema);
export default Chat;
