const
    taskModel = require('../DL/models/TaskModel'),
    uniqid = require('uniqid')

function create(newTask) {
    newTask.id = uniqid()
    //validation
    return taskModel.create(newTask)
}

module.exports = { create };