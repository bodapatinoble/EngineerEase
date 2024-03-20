import React,{useState} from 'react';
import './Card.css'; // Import CSS file for styling
import userProfile from "../components/articlesData.json";
import Badge from 'react-bootstrap/Badge';
import { useNavigate } from 'react-router-dom'; // Import useHistory hook



const Card = ({ profileImg, profileName, skills, experience,Score, onConnect, onViewProfile, onClose }) => {
    console.log("--------------------->",profileName,skills);
    return (
    <div className="UserCard">
    <div className='UserProfile'>
      <img src={profileImg} alt="Profile" className="Userprofile-image" />
      <div className="Userprofile-details">
        <h1>{profileName} <Badge className='badge'>{Score}</Badge></h1>
        <p>Skills: {skills}</p>
        <p>Experience: {experience}</p>
      </div>
    </div>
    <div className="Userbuttons">
        <button className='ConnectBtn' onClick={onConnect}>Connect</button>
        <button className='ViewProfile' onClick={onViewProfile}>View Full Profile</button>
      </div>
    </div>
    
  );
};

const UserProfile = ({ filteredProfiles }) => {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const navigate = useNavigate(); // Get history object from useHistory hook

  const handleConnect = () => {
    // Handle connect button click
    console.log("--------------------->");
    navigate('/chat'); // Navigate to the chat screen
  };

  const handleViewProfile = (profile) => {
    // Handle view full profile button click
    setSelectedProfile(profile);

  };

  const handleClose = () => {
    // Handle close button click
    setSelectedProfile(null);
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
      Score={userInfo.Score}
      onConnect={handleConnect}
      // onViewProfile={handleViewProfile}
      onViewProfile={() => handleViewProfile(userInfo)}
      onClose={handleClose}
    />
    ))}
    {selectedProfile && (
                <div className="ProfilePopup">
                    <div className="ProfilePopup-content">
                        <h2>{selectedProfile.profileName}</h2>
                        <p>Skills: {selectedProfile.skills.join(", ")}</p>
                        <p>Experience: {selectedProfile.experience}</p>
                        <button className='Close' onClick={handleClose}>Close</button>
                    </div>
                </div>
            )}
    </div>
  );
};

export default UserProfile;
