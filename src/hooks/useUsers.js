import { useState, useEffect } from "react";
import { api } from "../utils/api";

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await api.get("/users");  
      setUsers(response.data); 
    } catch (err) {
      setError("Failed to fetch users.", err);
    } finally {
      setLoading(false);
    }
  };

  const addUser = (user) => {
   
    setUsers((prev) => [
      ...prev,
      { ...user, id: Date.now() } 
    ]);
  };

  const updateUser = (id, updatedUser) => {
    
    setUsers((prev) =>
      prev.map((user) => (user.id === id ? { ...user, ...updatedUser } : user))
    );
  };

  const deleteUser = (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  useEffect(() => {
    fetchUsers();  
  }, []);  

  return { users, loading, error, addUser, updateUser, deleteUser };
};
