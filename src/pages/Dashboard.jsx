import { useState } from "react";
import { useUsers } from "../hooks/useUsers";
import UserForm from "../components/UserForm";
import UserList from "../components/UserList";
import Pagination from "../components/Pagination";

const Dashboard = () => {
  const { users, addUser, updateUser, deleteUser } = useUsers();
  const [editingUser, setEditingUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  const paginatedUsers = users.slice(
    (currentPage - 1) * usersPerPage,
    currentPage * usersPerPage
  );

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const handleDoubleClickEdit = (user) => {
    if (editingUser?.id === user.id) {
      setEditingUser(null); // Toggle Add form if double-clicked on the same user
    } else {
      setEditingUser(user); // Set to Update form if a different user is double-clicked
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">User Management Dashboard</h1>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          {editingUser ? (
            <UserForm
              initialData={editingUser}
              onSubmit={(data) => {
                updateUser(editingUser.id, data);
                setEditingUser(null);
              }}
            />
          ) : (
            <UserForm onSubmit={addUser} />
          )}
        </div>
        <div className="flex-1">
          <UserList
            users={paginatedUsers}
            onEdit={handleEdit}
            onDelete={deleteUser}
            onDoubleClickEdit={handleDoubleClickEdit}
          />
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(users.length / usersPerPage)}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Dashboard;
