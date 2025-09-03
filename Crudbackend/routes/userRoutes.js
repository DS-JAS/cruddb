import express from 'express';
import {
  getAllUsers,
  addUser,
  editUser,
  removeUser,
} from '../controllers/userController.js';

const router = express.Router();

router.get('/', getAllUsers);
router.post('/', addUser);
router.put('/:id', editUser);
router.delete('/:id', removeUser);

export default router;
