const TaskModel = require("../models/TaskModel");

module.exports.list =  function list(request, response) {
    TaskModel.find({}).exec()
    .then(task => {
        return response.json(task);
    });
}

module.exports.show =  function show(request, response) {
    TaskModel.findById(request.params.id).exec()
    .then(task => {
        return response.json(task)
    })
}

module.exports.create =  function create(request, response) {
    const newTask = new TaskModel({
        task:request.body.task,
        date:request.body.date
    });
   newTask.save()
   .then(savedTask => {
       return response.json(savedTask)
   });

}
