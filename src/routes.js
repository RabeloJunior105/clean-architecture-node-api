import express from "express";
const router = express.Router();
import { UsersController } from "./modules/users/users.controller";

module.exports = () => {
  router.post("./signup", new UsersController().route);
};
