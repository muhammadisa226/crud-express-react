import express from "express";
import {
  getUsers,
  getUsersById,
  createUser,
  updateUser,
  deleteUser,
} from "../controller/userController.js";
const router = express.Router();

router.get("/api/users", getUsers);
router.get("/api/users/:id", getUsersById);
router.post("/api/users", createUser);
router.patch("/api/users/:id", updateUser);
router.delete("/api/users/:id", deleteUser);
export default router;
