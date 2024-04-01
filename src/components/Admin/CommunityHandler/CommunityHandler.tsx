"use client"

import React, { useState, useEffect, ChangeEvent } from 'react';
import axios from 'axios';
import { createCommunity, getCommunities } from '@/api';

const CommunityHandler: React.FC = () => {
  const [communities, setCommunities] = useState<string[]>([]); 
  const [newCommunityName, setNewCommunityName] = useState<string>('');
  const [selectedCommunity, setSelectedCommunity] = useState<string | null>(null);
  const [usersInSelectedCommunity, setUsersInSelectedCommunity] = useState<string[]>([]);
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [newUserName, setNewUserName] = useState<string>('');
  const [allUsers, setAllUsers] = useState<string[]>([]);
  const [totalCommunities, setTotalCommunities] = useState<number>(0);





  const handleCreateCommunity = () => {
    createCommunity(newCommunityName).then((res) => {
      if (res.ok) {
        // logic to refresh the communities list
      }
    });
  };

  const handleDeleteCommunity = (event: ChangeEvent<HTMLSelectElement>) => {
    const communityId = event.currentTarget.value;
    // logic to delete a community
  };

  const handleSelectCommunity = (event: ChangeEvent<HTMLSelectElement>) => {
    const communityId = event.currentTarget.value;
    setSelectedCommunity(communityId);
    // logic to fetch users in the selected community
  };

  const handleRemoveUserFromCommunity = () => {
    if (selectedUser && selectedCommunity) {
      // logic to remove a user from a community
    }
  };

  const handleAddUserToCommunity = () => {
    if (newUserName && selectedCommunity) {
      // logic to add a user to a community
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Total Communities</h2>
          <p className="text-3xl font-bold">{totalCommunities}</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Create Community</h2>
          <input
            type="text"
            value={newCommunityName}
            onChange={(e) => setNewCommunityName(e.target.value)}
            placeholder="New Community Name"
            className="input"
          />
          <button onClick={handleCreateCommunity} className="btn-primary mt-4">
            Create
          </button>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Delete Community</h2>
          <select onChange={handleDeleteCommunity} className="select">
            {communities.map((community, index) => (
              <option key={index} value={community}>
                {community}
              </option>
            ))}
          </select>
          <button onClick={handleDeleteCommunity} className="btn-primary mt-4">
            Delete
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mt-8">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Add User</h2>
          <input
            type="text"
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
            placeholder="New User Name"
            className="input"
          />
          <select onChange={handleSelectCommunity} className="select mt-4">
            {communities.map((community, index) => (
              <option key={index} value={community}>
                {community}
              </option>
            ))}
          </select>
          <button onClick={handleAddUserToCommunity} className="btn-primary mt-4">
            Add
          </button>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Manage Users</h2>
          <select onChange={handleSelectCommunity} className="select">
            {communities.map((community, index) => (
              <option key={index} value={community}>
                {community}
              </option>
            ))}
          </select>
          <select onChange={(e) => setSelectedUser(e.currentTarget.value)} className="select mt-4">
            {allUsers.map((user, index) => (
              <option key={index} value={user}>
                {user}
              </option>
            ))}
          </select>
          <button onClick={handleRemoveUserFromCommunity} className="btn-primary mt-4">
            Remove User
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommunityHandler;






