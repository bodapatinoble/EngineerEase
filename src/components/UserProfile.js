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
        <p>{profileName}</p>
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

const UserProfile = () => {

//   // User profile details in JSON format
// //   const userProfile =[
// //     {
// //     profileImage: "avatar_25.jpg",
// //     username: "Noble Tej",
// //     skills: ["React, JavaScript, HTML, CSS"],
// //     experience: "2 years"
// //   },
// //   {
// //     profileImage: "avatar_25.jpg",
// //     username: "JohnDoe",
// //     skills: ["React, JavaScript, HTML, CSS"],
// //     experience: "5 years"
// //   },
// ];

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
    <div>{
    userProfile.map(userInfo => (
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
