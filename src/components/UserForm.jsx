

/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const UserForm = ({ initialData, onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: initialData ? initialData.name : "",
    email: initialData ? initialData.email : "",
    department: initialData ? initialData.department : "",
  });

  const [errorMessage, setErrorMessage] = useState(""); 
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (initialData) {
      setFormData({
        fullName: initialData.name || "",
        email: initialData.email || "",
        department: initialData.department || "",
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate if all fields are filled
    if (!formData.fullName || !formData.email || !formData.department) {
      setErrorMessage("Please fill all the fields.");
      setSuccessMessage(""); // Clear success message
      return;
    }

    setErrorMessage(""); // Clear error message
    const updatedData = {
      ...formData,
      name: formData.fullName,  // Update name field for the UserList
    };

    onSubmit(updatedData);

    // Show success message
    if (initialData) {
      setSuccessMessage("User updated successfully!");
    } else {
      setSuccessMessage("New user added successfully!");
    }

    // Reset form after submission
    setFormData({
      fullName: "",
      email: "",
      department: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-md shadow-lg space-y-4 max-w-md mx-auto mt-6"
    >
      <h2 className="text-2xl font-semibold text-gray-800 text-center">
        {initialData ? "Edit User" : "Add New User"}
      </h2>

      {/* Display error message */}
      {errorMessage && (
        <div className="text-red-600 text-center mt-2">{errorMessage}</div>
      )}

      {/* Display success message */}
      {successMessage && (
        <div className="text-green-600 text-center mt-2">{successMessage}</div>
      )}

      <div className="space-y-4">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName || ""}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email || ""}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="department"
          placeholder="Department"
          value={formData.department || ""}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 transition"
      >
        {initialData ? "Update User" : "Add User"}
      </button>
    </form>
  );
};

export default UserForm;
