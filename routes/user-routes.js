import express from 'express';
import { getAllUser, apply } from '../controllers/user-controller.js';

const router = express.Router();

// access all users from server
router.get("/", getAllUser);

router.post("/apply", apply);

export default router;