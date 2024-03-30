"use client"

import React, { useState, ChangeEvent } from 'react';

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

  const handleUserChange = (event) => {
    setSelectedUser(event.currentTarget.value);
  };

  return (
    <div className="flex flex-col items-center space-y-8 p-8 border border-black rounded-lg w-full h-40%">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>
      <div className="grid grid-cols-3 gap-4 w-full">
        <section className="flex flex-col items-center space-y-4 border border-black p-4 rounded-md">
          <h2 className="text-lg font-bold mb-2">Create User</h2>
          <input type="text" value={newUserName} onChange={(e) => setNewUserName(e.target.value)} placeholder="New User Name" className="border border-gray-300 rounded-md p-2 w-full" />
          <button onClick={handleCreateUser} className="px-4 py-2 bg-black text-white rounded-md w-full">Create</button>
        </section>
        <section className="flex flex-col items-center space-y-4 border border-black p-4 rounded-md">
          <h2 className="text-lg font-bold mb-2">Delete User</h2>
          <input type="text" value={deleteUserName} onChange={(e) => setDeleteUserName(e.target.value)} placeholder="User Name to Delete" className="border border-gray-300 rounded-md p-2 w-full" />
          <button onClick={handleDeleteUser} className="px-4 py-2 bg-black text-white rounded-md w-full">Delete</button>
        </section>
        <section className="flex flex-col items-center space-y-4 border border-black p-4 rounded-md">
          <h2 className="text-lg font-bold mb-2">Change Password</h2>
          <select onChange={handleUserChange} className="border border-gray-300 rounded-md p-2 w-full">
            {users.map((user, index) => (
              <option key={index} value={user}>{user}</option>
            ))}
          </select>
          <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="New Password" className="border border-gray-300 rounded-md p-2 w-full" />
          <button onClick={handleChangePassword} className="px-4 py-2 bg-black text-white rounded-md w-full">Change Password</button>
        </section>
      </div>
    </div>
  );
}

export default UserHandler;




