import express from 'express';
import { getAllUser, getByEmail, getById, apply, deleteById } from '../controllers/user-controller.js';

const router = express.Router();

// get all users from server (for debugging)
router.get("/", getAllUser);
router.get("/:email", getByEmail);
router.get("/:id", getById);

router.post("/apply", apply);

// patch

// delete by email
// delete by id
router.delete("/delete/:id", deleteById);



export default router;