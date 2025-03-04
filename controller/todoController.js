const model = require("../Model/todoModels");

const getTodos = async (req, res) => {
  const allTodos = await Todo.find();
  res.status(200).json(allTodos);
};

const createTodo = async (req, res) => {
  const { title, completed } = req.body;
  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }

  const newTodo = await Todo.create({ title, description });
  res.status(201).json({ newTodo });
};

const deleteTodo = async (req, res) => {
  const { id } = req.params;
  const todo = await Todo.findById(id);
  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }
  await todo.deleteOne();
  res.status(200).json({ message: "Todo Secessfully delted" });
};

const updateTodo = async (req, res) => {
    const { id } = req.params;
    const { title, completed } = req.body;
    const todo = await
    Todo.findById(id); 
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    todo.title = title || todo.title;
    todo.completed = completed || todo.completed;
    todo.description = description || todo.description;
    await todo.save();
    res.status(200).json({ todo });
    }
    module.exports = { getTodos, createTodo, deleteTodo, updateTodo };