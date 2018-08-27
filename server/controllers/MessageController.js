const MessageModel = require("../models/MessageModel");

module.exports.list =  function list(request, response) {
    MessageModel.find({}).exec()
    .then(message => {
        return response.json(message);
    });
}

module.exports.show =  function show(request, response) {
    MessageModel.findById(request.params.id).exec()
    .then(message => {
        return response.json(message)
    })
}

module.exports.create =  function create(request, response) {
    const newMessage = new MessageModel({
        name:request.body.name,
        date:request.body.date,
        message: request.body.message
    });
   newOrder.save()
   .then(savedMessage => {
       return response.json(savedMessage)
   });

}