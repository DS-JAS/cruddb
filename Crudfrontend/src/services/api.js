import axios from 'axios';
const API_URL = "http://34.133.75.1:5000/api/users";

export const getUsers = () => axios.get(API_URL);
export const addUser = (user) => axios.post(API_URL, user);
export const updateUser = (id, user) => axios.put(`${API_URL}/${id}`, user);
export const deleteUser = (id) => axios.delete(`${API_URL}/${id}`);
