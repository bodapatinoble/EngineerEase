import React,{useState} from 'react';
import './Card.css'; // Import CSS file for styling
import userProfile from "../components/articlesData.json";

const Card = ({ profileImg, profileName, skills, experience, onConnect, onViewProfile, onClose }) => {
    console.log("--------------------->",profileName,skills);
    return (
    <div className="UserCard">
    <div className='UserProfile'>
      <img src={profileImg} alt="Profile" className="Userprofile-image" />
      <div className="Userprofile-details">
        <h1>{profileName}</h1>
        <p>Skills: {skills}</p>
        <p>Experience: {experience}</p>
      </div>
    </div>
    <div className="Userbuttons">
        <button className='ConnectBtn' onClick={onConnect}>Connect</button>
        <button className='ViewProfile' onClick={onViewProfile}>View Full Profile</button>
        <button className='Close' onClick={onClose}>Close</button>
      </div>
    </div>
    
  );
};

const UserProfile = ({ filteredProfiles }) => {

  const handleConnect = () => {
    // Handle connect button click
    console.log("--------------------->");

  };

  const handleViewProfile = () => {
    // Handle view full profile button click
  };

  const handleClose = () => {
    // Handle close button click
  };

  return (
    <div className='center-container'>{
      filteredProfiles.map(userInfo => (
    <Card
    key={userInfo.id}
      profileImg={userInfo.profileImg}
      profileName={userInfo.profileName}
      skills={userInfo.skills.join(",")}
      experience={userInfo.experience}
      onConnect={handleConnect}
      onViewProfile={handleViewProfile}
      onClose={handleClose}
    />
    ))}
    </div>
  );
};

export default UserProfile;
