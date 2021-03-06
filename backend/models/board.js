import mongoose from "mongoose";

const boardSchema = new mongoose.Schema({
    workBoardId: { type: mongoose.Schema.ObjectId, ref: "workboards" },
    userId: { type: mongoose.Schema.ObjectId, ref: "users" },
    name: String,
    description: String,
    taskStatus: String,
    imageUrl: String,
    registerDate: { type: Date, default: Date.now },
});

const board = mongoose.model("boards", boardSchema);
export default board;