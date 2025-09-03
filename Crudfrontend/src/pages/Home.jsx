import React, { useEffect, useState } from 'react';
import { getUsers, addUser, updateUser, deleteUser } from '../services/api';
import Userlists from '../components/Userlists';

function Home() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: '', email: '' });
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await getUsers();
        setUsers(res.data);
      } catch (err) {
        console.error("Failed to fetch users", err);
      }
    };
    fetchUsers();
  }, []);

  const handleSubmit = async () => {
    try {
      if (editing) {
        await updateUser(editing, form);
      } else {
        await addUser(form);
      }
      setForm({ name: '', email: '' });
      setEditing(null);
      const res = await getUsers();
      setUsers(res.data);
    } catch (err) {
      console.error("Error submitting user", err);
    }
  };

  return (
    <div>
  <h1>React CRUD Operations using Github actions </h1>
      <input
        value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })}
        placeholder="Name"
      />
      <input
        value={form.email}
        onChange={e => setForm({ ...form, email: e.target.value })}
        placeholder="Email"
      />
      <button onClick={handleSubmit}>
        {editing ? "Update" : "Add"}
      </button>

      <Userlists
        users={users}
        onEdit={(user) => {
          setForm({ name: user.name, email: user.email });
          setEditing(user.id);
        }}
        onDelete={(id) => deleteUser(id).then(() => getUsers().then(res => setUsers(res.data)))}
      />
    </div>
    
  );
}

export default Home;
