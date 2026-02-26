import React from 'react'
import {useState, useEffect} from 'react'

export default function Users() {
const [users, setUsers] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

    useEffect(() => {
  const fetchUsers = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  fetchUsers();
}, []);

if (loading) return <p>Loading...</p>;
if (error) return <p>{error}</p>;
  return (
    <div>
        <h2> User List</h2>
        {users.map(user => (
            <p key={user.id}> {user.name} </p>
        ))}
    </div>
  )
}
