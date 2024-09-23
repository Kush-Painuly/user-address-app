import { Router } from "express";
import {registerUser } from "../controllers/User.controller.js";

export const userRoutes = Router();

userRoutes.post('/register', registerUser);