"use client"

import React, { useState } from 'react';

const UserHandler = () => {
  const [users, setUsers] = useState([]); 
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
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 h-[20vh]">
      <div className="p-6 bg-primary rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-2 text-white">Create User</h2>
        <input 
          type="text" 
          value={newUserName} 
          onChange={(e) => setNewUserName(e.target.value)} 
          placeholder="New User Name" 
          className="px-4 py-2 rounded-md focus:outline-none focus:border-purple-500 mb-5 w-full input"
        />
        <button onClick={handleCreateUser} className="flex w-full bg-secondary hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105 justify-center btn-primary">
          Create
        </button>
      </div>
      <div className="p-6 bg-primary rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-2 text-white">Delete User</h2>
        <input 
          type="text" 
          value={deleteUserName} 
          onChange={(e) => setDeleteUserName(e.target.value)} 
          placeholder="User Name to Delete" 
          className="px-4 py-2 rounded-md focus:outline-none focus:border-purple-500 mb-5 w-full input"
        />
        <button onClick={handleDeleteUser} className="flex w-full bg-secondary hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105 justify-center btn-primary">
          Delete
        </button>
      </div>
      <div className="p-6 bg-primary rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-2 text-white">Change Password</h2>
        <select onChange={handleUserChange} className="select mb-5 p-2 flex w-full">
        <option value="" disabled selected className="opacity-20" >Select USER </option>    

          {users.map((user, index) => (
            <option key={index} value={user}>{user}</option>
          ))}
        </select>
        <input 
          type="password" 
          value={newPassword} 
          onChange={(e) => setNewPassword(e.target.value)} 
          placeholder="New Password" 
          className="px-4 py-2 rounded-md focus:outline-none focus:border-purple-500 mb-5 w-full input"
        />
        <button onClick={handleChangePassword} className="flex w-full bg-secondary hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105 justify-center btn-primary">
          Change Password
        </button>
      </div>
    </div>
  </div>
);

  
}

export default UserHandler;





