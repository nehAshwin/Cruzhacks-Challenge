import express from 'express';
import { getAllUser, apply } from '../controllers/user-controller.js';

const router = express.Router();

// get all users from server (for debugging)
router.get("/", getAllUser);

router.post("/apply", apply);

export default router;