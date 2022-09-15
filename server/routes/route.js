import express, { Router } from "express";

import { addTodo, getAllTodos } from "../controllers/todo-controllers.js";

const route = express.Router();

route.post("/todos", addTodo);
route.get("/todos", getAllTodos);

export default route;
