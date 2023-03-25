import express from "express"
import {
    getUser,
    getUserFriends,
    addRemoveFriends
} from "../controllers/users.js";
import { verifyToken} from "../middleware/auth.js";

const router = express.Router();

//read operation
router.get("/:id", verifyToken, getUser);
router.get("/:id/:friendId", verifyToken, getUserFriends);

//update operation
router.patch("/:id/:friendId", verifyToken, addRemoveFriends);

export default router;