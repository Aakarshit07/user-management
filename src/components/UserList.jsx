/* eslint-disable react/prop-types */

const UserList = ({ users, onEdit, onDelete }) => {
  return (
    <div className="overflow-hidden rounded-lg shadow-lg bg-white mt-6">
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Department</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user?.id} className="border-t border-neutral-200">
                <td className="px-4 py-2">{user?.name}</td>
                <td className="px-4 py-2">{user?.email}</td>
                <td className="px-4 py-2">{user?.username || user.department || 'N/A'}</td>
                <td className="px-4 py-2 flex space-x-3">
                  <button
                    onClick={() => onEdit(user)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(user?.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
