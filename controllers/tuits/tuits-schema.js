import mongoose from 'mongoose';

const schema = mongoose.Schema({

    userName: { type: String, default: "JavaScript" },
    time: { type: String, default: "2h" },
    image: { type: String, default: "javascript-logo.png" },
    liked: { type: Boolean, default: false },
    disliked: { type: Boolean, default: false },
    replies: { type: Number, default: 0 },
    retuits: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
    handle: { type: String, default: "javascript" },
    tuit: String

}, {collection: 'tuits'});

export default schema;
