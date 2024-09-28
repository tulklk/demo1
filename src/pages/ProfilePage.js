import "../styles/ProfilePage.css";
import React, { useState, useEffect } from "react";
import Footer from '../components/Footer';
import axios from "axios";

const ProfilePage = () => {
  const [profile, setUserProfile] = useState({
    userID: '',
    username: '',
    email: '',
    password: '',
    phoneNumber: '',
    address:'',
  });

  const userID = 2; // Hardcode userID to 2
  const [error, setError] = useState('');

  useEffect(() => {
    loadUserProfile();
  }, []);

  const loadUserProfile = async () => {
    try {
      // const result = await axios.get(`http://localhost:8080/identity/users/2`);
      const result = await axios.get(`http://localhost:8080/identity/users/${userID}`);
      setUserProfile(result.data);
    } catch (error) {
      console.error("Error loading user profile:", error);
      setError("Failed to load user profile. Please try again.");
    }
  };

  const handleChange = (e) => {
    setUserProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/identity/users/${userID}`, profile);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      setError("Failed to update profile. Please try again.");
    }
  };

  return (
    <div>
      <h1>Update Profile</h1>
      {error && <p>{error}</p>}
      
      <form onSubmit={handleUpdate}>
        <label>
          Username:
          <input 
            type="text" 
            name="username" 
            value={profile.username} 
            onChange={handleChange} 
            disabled 
          />
        </label>

        <label>
          Email:
          <input 
            type="email" 
            name="email" 
            value={profile.email} 
            onChange={handleChange} 
            disabled 
          />
        </label>

        <label>
          Password:
          <input 
            type="password" 
            name="password" 
            value={profile.password} 
            onChange={handleChange} 
          />
        </label>

        <label>
          Phone Number:
          <input 
            type="text" 
            name="phoneNumber" 
            value={profile.phoneNumber} 
            onChange={handleChange} 
          />
        </label>

        <label>
          Address:
          <input 
            type="text" 
            name="address" 
            value={profile.address} 
            onChange={handleChange} 
          />
        </label>

        <button type="submit">Update Profile</button>
      </form>

      <Footer />
    </div>
  );
};

export default ProfilePage;
