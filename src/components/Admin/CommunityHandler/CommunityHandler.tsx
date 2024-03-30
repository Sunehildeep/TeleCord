"use client"

import React, { useState, useEffect, ChangeEvent } from 'react';
import axios from 'axios';

const CommunityHandler: React.FC = () => {
  const [communities, setCommunities] = useState<string[]>([]); // replace with actual data
  const [newCommunityName, setNewCommunityName] = useState<string>('');
  const [selectedCommunity, setSelectedCommunity] = useState<string | null>(null);
  const [usersInSelectedCommunity, setUsersInSelectedCommunity] = useState<string[]>([]); // replace with actual data
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [newUserName, setNewUserName] = useState<string>('');
  const [allUsers, setAllUsers] = useState<string[]>([]); // state to store all users
  const [totalCommunities, setTotalCommunities] = useState<number>(0); // state to store total communities

  
interface User {
  id: number;
  name: string;
  email: string;
  
}
  // Fetch all users from backend
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.post('/getUser', {});
        setAllUsers(response.data.users); // Assuming the response contains a 'users' array
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  // Fetch total number of communities
  useEffect(() => {
    const fetchTotalCommunities = async () => {
      try {
        const response = await axios.get('/totalCommunities');
        setTotalCommunities(response.data.total); // Assuming the response contains the total number of communities
      } catch (error) {
        console.error('Error fetching total communities:', error);
      }
    };
    fetchTotalCommunities();
  }, []);

  // Handlers for various actions
  const handleCreateCommunity = () => {
    // logic to create a community using newCommunityName
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
    
    
    <div className="flex flex-col items-center space-y-8 p-8 border border-black rounded-lg">
      {/* Row 1: Total Communities, Create Community, Delete Community */}
      <div className="grid grid-cols-3 gap-4 w-full">
        {/* Total Communities */}
        <section className="flex flex-col items-center space-y-4 border border-black p-4 rounded-md">
          <h2 className="text-lg font-bold">Total Communities</h2>
          <p className="text-lg">{totalCommunities}</p>
        </section>
        {/* Create Community */}
        <section className="flex flex-col items-center space-y-4 border border-black p-4 rounded-md">
          <h2 className="text-lg font-bold mb-2">Create Community</h2>
          <input
            type="text"
            value={newCommunityName}
            onChange={(e) => setNewCommunityName(e.target.value)}
            placeholder="New Community Name"
            className="border border-gray-300 rounded-md p-2 w-full"
          />
          <button onClick={handleCreateCommunity} className="px-4 py-2 bg-black text-white rounded-md w-full">
            Create
          </button>
        </section>
        {/* Delete Community */}
        <section className="flex flex-col items-center space-y-4 border border-black p-4 rounded-md">
          <h2 className="text-lg font-bold mb-2">Delete Community</h2>
          <select onChange={handleDeleteCommunity} className="border border-gray-300 rounded-md p-2 w-full">
            {communities.map((community, index) => (
              <option key={index} value={community}>
                {community}
              </option>
            ))}
          </select>
          <button onClick={handleDeleteCommunity} className="px-4 py-2 bg-black text-white rounded-md w-full">
            Delete
          </button>
        </section>
      </div>
      {/* Row 2: Add User, Manage Users */}
      <div className="grid grid-cols-2 gap-4 w-full">
        {/* Add User */}
        <section className="flex flex-col items-center space-y-4 border border-black p-4 rounded-md">
          <h2 className="text-lg font-bold mb-2">Add User</h2>
          <input
            type="text"
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
            placeholder="New User Name"
            className="border border-gray-300 rounded-md p-2 w-full"
          />
          <select onChange={handleSelectCommunity} className="border border-gray-300 rounded-md p-2 w-full">
            {communities.map((community, index) => (
              <option key={index} value={community}>
                {community}
              </option>
            ))}
          </select>
          <button onClick={handleAddUserToCommunity} className="px-4 py-2 bg-black text-white rounded-md w-full">
            Add
          </button>
        </section>
        {/* Manage Users */}
        <section className="flex flex-col items-center space-y-4 border border-black p-4 rounded-md">
          <h2 className="text-lg font-bold">Manage Users</h2>
          <select onChange={handleSelectCommunity} className="border border-gray-300 rounded-md p-2 w-full">
            {communities.map((community, index) => (
              <option key={index} value={community}>
                {community}
              </option>
            ))}
          </select>
          <select onChange={(e) => setSelectedUser(e.currentTarget.value)} className="border border-gray-300 rounded-md p-2 w-full">
            {allUsers.map((user, index) => (
              <option key={index} value={user}>
                {user}
              </option>
            ))}
          </select>
          <button onClick={handleRemoveUserFromCommunity} className="px-4 py-2 bg-black text-white rounded-md w-full">
            Remove User
          </button>
        </section>
        
      </div>
      
    </div>
    
  );
};

export default CommunityHandler;





