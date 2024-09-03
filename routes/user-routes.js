import express from 'express';
import { getAllUser, getByEmail, getById, apply, updateUser, deleteById } from '../controllers/user-controller.js';

const router = express.Router();

// get all users from server (for debugging)
router.get("/", getAllUser);
router.get("/:email", getByEmail);
router.get("/:id", getById);

router.post("/apply", apply);

// patch
router.patch("/update/:id", updateUser);

// delete by email
// delete by id
router.delete("/delete/:id", deleteById);



export default router;