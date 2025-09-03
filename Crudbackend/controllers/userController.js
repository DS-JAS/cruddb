import * as User from '../models/userModel.js';

export const getAllUsers = (req, res) => {
  User.getUsers((err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result);
  });
};

export const addUser = (req, res) => {
  User.createUser(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ id: result.insertId, ...req.body });
  });
};

export const editUser = (req, res) => {
  User.updateUser(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ id: req.params.id, ...req.body });
  });
};

export const removeUser = (req, res) => {
  User.deleteUser(req.params.id, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ success: true });
  });
};
