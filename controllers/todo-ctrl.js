const Todo = require('../models/todo-model');

getTodos = async (req, res) => {
    await Todo.find({}, (err, todos) => {
        if (err) {
            return res.status(400).json({
                success:false,error:err
            })
        }
        if (!todos.length) {
            return res.status(400).json({
                data:[],success:false
            })
        }
        return res.status(200).json({success:true,data:todos})


    })
}
getTodoById = async (req, res) => {
    await Todo.findOne({ _id: req.params.id }, (error, todo) => {
        if (error) {
            return res.status(400).json({success:false,error})
        }
        if (!todo) {
            return res.status(404).json({success:false,error:"Todo not found"})
        }
        return res.status(200).json({success:true,data:todo})
    }).catch(err=>console.log(err))
}
createTodo = (req, res) => {
    const body = req.body
    if (!body) {
        return res.status(400).json({
            success: false,
            error:"Provide todo."
       })
    }
    const todo = new Todo(body);
    if (!todo) {
        return res.status(400).json({success:false,error:"Creating encountered error"})
    }
    todo.save()
        .then((savedRes) => {
            return res.status(201).json({
                success: true,
                id: savedRes._id,
                message:"Todo created!"
            })
                .catch(error => {
                    return res.status(400).json({
                        error,
                        message:'Movie not created!'
                })
            })
    })
}
deleteTodo = async(req,res) => {
    await Todo.findOneAndDelete({ _id: req.params.id }, (err, todo) => {
        if (err) {
            return res.status(400).json({success:false,error:err})
        }
        if (!todo) {
            return res.status(400).json({success:false,error:'Todo not found'})
        }
        return res.status(200).json({success:true,data:todo})
    }).catch(err=>console.log(err))
}
updateTodo = async (req, res) => {
    const body = req.body;
    if (!body) {
        return res.status(400).json({success:false,error:'Provide Todo data to update'})
    }
    Todo.findOne({ _id: req.params.id }, (err, todo) => {
        if (err) {
            return res.status(400).json({err,message:'Todo not found!'})
        }
        todo.taskName = body.taskName
        todo.taskDesc = body.taskDesc
        todo.taskPriority = body.taskPriority
        todo.save().then(updatedTodo => {
            return res.status(200).json({success:true,id:todo._id,data:todo,message:"Todo Updated!"})
        }).catch(err => {
            return res.status(400).json({
                error: err,
                message:'Todo was not updated!'
            })
        })
    })
}
module.exports = {
    createTodo,
    updateTodo,
    deleteTodo,
    getTodoById,
    getTodos
}