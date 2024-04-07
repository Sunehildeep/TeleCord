"use client"

import React, { useState } from 'react';

const UserHandler = () => {
  const [users, setUsers] = useState([]); // Replace with actual data
  const [selectedUser, setSelectedUser] = useState('');
  const [newUserName, setNewUserName] = useState('');
  const [deleteUserName, setDeleteUserName] = useState('');
  const [changePasswordUserName, setChangePasswordUserName] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleCreateUser = () => {
    // Logic to create a user
  };

  const handleDeleteUser = () => {
    // Logic to delete a user
  };

  const handleChangePassword = () => {
    // Logic to change user's password
  };

  const handleUserChange = (event : any) => {
    setSelectedUser(event.currentTarget.value);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4 text-center">User Management</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">Create User</h2>
          <input 
            type="text" 
            value={newUserName} 
            onChange={(e) => setNewUserName(e.target.value)} 
            placeholder="New User Name" 
            className="input"
          />
          <button onClick={handleCreateUser} className="btn-primary mt-4 w-full">Create</button>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">Delete User</h2>
          <input 
            type="text" 
            value={deleteUserName} 
            onChange={(e) => setDeleteUserName(e.target.value)} 
            placeholder="User Name to Delete" 
            className="input"
          />
          <button onClick={handleDeleteUser} className="btn-primary mt-4 w-full">Delete</button>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">Change Password</h2>
          <select onChange={handleUserChange} className="select">
            {users.map((user, index) => (
              <option key={index} value={user}>{user}</option>
            ))}
          </select>
          <input 
            type="password" 
            value={newPassword} 
            onChange={(e) => setNewPassword(e.target.value)} 
            placeholder="New Password" 
            className="input mt-4"
          />
          <button onClick={handleChangePassword} className="btn-primary mt-4 w-full">Change Password</button>
        </div>
      </div>
    </div>
  );
}

export default UserHandler;





