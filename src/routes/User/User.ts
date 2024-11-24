import { Router, Request, Response } from "express";
import { addUser, getUserById, getUsers } from "../../handlers/User/User.js";

const Route = Router();

Route.get("/", getUsers);
Route.get(
  "/:id",
  getUserById as (request: Request, response: Response) => void
);
Route.post("/", addUser as (request: Request, response: Response) => void);

export default Route;
