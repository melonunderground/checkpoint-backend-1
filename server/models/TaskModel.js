let mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    task: {
        type: String
    },
    date: {
        type: String
    }
});

module.exports = mongoose.model("Task", taskSchema);