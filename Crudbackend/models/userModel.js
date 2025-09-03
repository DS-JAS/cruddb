import db from '../config/database.js';

export const getUsers = (callback) => {
  db.query('SELECT * FROM users', callback);
};

export const createUser = (user, callback) => {
  const { name, email } = user;
  db.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email], callback);
};

export const updateUser = (id, user, callback) => {
  const { name, email } = user;
  db.query('UPDATE users SET name = ?, email = ? WHERE id = ?', [name, email, id], callback);
};

export const deleteUser = (id, callback) => {
  db.query('DELETE FROM users WHERE id = ?', [id], callback);
};
