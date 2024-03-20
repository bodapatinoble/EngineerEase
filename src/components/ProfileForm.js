// ProfileForm.js
import React, { useState } from 'react';
import axios from 'axios';

const ProfileForm = () => {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [skills, setSkills] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const profileData = { name, bio, skills: skills.split(',') };
    try {
      await axios.post('/api/profiles', profileData);
      alert('Profile created successfully!');
    } catch (error) {
      console.error('Error creating profile:', error);
      alert('Error creating profile');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <textarea placeholder="Bio" value={bio} onChange={(e) => setBio(e.target.value)} />
      <input type="text" placeholder="Skills (comma-separated)" value={skills} onChange={(e) => setSkills(e.target.value)} />
      <button type="submit">Create Profile</button>
    </form>
  );
};

export default ProfileForm;
