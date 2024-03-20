import React,{useState,useEffect,useCallback} from "react";
import "./topbar.css";
import Graphs from "./Graphs";
import About from "./about";

import Articles from "./ArticlesCard";
import userProfile from "../components/articlesData.json";
import UserProfile from "./UserProfile";
import { Link } from "react-router-dom";


export default function Topbar(){
    const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const [searchMainQuery, setSearchMainQuery] = useState(""); // State to hold the search query
    const [isSearchOpen, setIsSearchOpen] = useState(false); // State to track search bar visibility
    const [activeComponent, setActiveComponent] = useState("Home");

    const [showArticles, setShowArticles] = useState(true);

    const handleDashboardClick = () => {
      setShowArticles(true);
    };
    // Memoized event handler using useCallback to prevent re-renders
    const handleDashboardClick1 = useCallback((component) => {
        setActiveComponent(component);
    }, []);
  
    const handleAboutSection = () => {
      setShowArticles(false);
    };
  
    // Ensure the state is updated when clicking the "About" section again
    useEffect(() => {
      if (!showArticles) {
        setShowArticles(false);
      }
    }, [showArticles]);

    const handleSearch = (event) => {
        setSearchMainQuery(event.target.value);
    };

    const handleprofile = () => {
        console.log('settings');
    }

    const toggleSearchBar = () => {
        setIsSearchOpen(!isSearchOpen);
      };
      const onSearch = (profileName) => {
        setSearchMainQuery(profileName);
        console.log("search-------------------------->", profileName);
        setIsSearchOpen(false); // Close the dropdown

      }

    //  // Filter the userProfile based on the searchMainQuery
    //  const filteredProfiles =  userProfile.filter(profile =>
    //     profile.skills.some(skill =>
    //         skill.toLowerCase().includes(searchMainQuery.toLowerCase())
    //     )
    // );
    const formattedQuery = searchMainQuery.toLowerCase(); // Convert searchMainQuery to lowercase
    const filteredProfiles = userProfile.filter(profile =>
        profile.profileName.toLowerCase().includes(formattedQuery) || // Check if profileName matches searchMainQuery
        profile.skills.some(skill =>
            skill.toLowerCase().includes(formattedQuery)
        )
    );
    return (
        <><div class="navbar">
            <div className="topbar">
            <div className="flex">  
                <img src="purpletalk.png" alt="Company Logo" />
            </div>
            <div class="nav-item flex4">
                <div className="center-container">
                    <input
                        className="EmployeeSearchBar"
                        type="text"
                        placeholder="EmplSearch.."
                        value={searchMainQuery}
                        onChange={handleSearch}
                    />
                    <div className="dropdown">
                        {
                        userProfile.filter(item => {
                            const searchTerm = searchMainQuery.toLowerCase();
                            const profileNameMatched = item.profileName.toLowerCase().includes(searchTerm);

                            // const full_name = item.profileName.toLowerCase();
                            // return searchTerm && full_name.startsWith(searchTerm);
                            const skillsMatched = item.skills.some(skill =>
                                skill.toLowerCase().includes(searchTerm)
                            );
                            return(skillsMatched && searchTerm  );
                        })
                        .map((item) => (
                            <div key= {item.id} onClick={() => onSearch(item.profileName)} className="dropdown-row">
                            {item.profileName}
                            </div>
                        ))}
                    </div>
                </div>
            <div className="profile2">
                 <img onClick={handleprofile} src="avatar_25.jpg" alt="Profile" className="profile-pic1" />
            </div>
             </div>
        </div>
             {/* <div className="flex5">
                    <img  className = "navProfImg" src="avatar_25.jpg" alt="Profile Image" />
             </div> */}
             {/* {searchMainQuery && <UserProfile userProfile={filteredProfiles} />} */}
           </div>
        <div class="navbar1">
                <div class="nav-item flex1">
                    {/* Profile Image with Name */}
                    <div className="profile1">
                        <img src="avatar_25.jpg" alt="Profile Image" />
                        <span className="profile-name">John Doe</span>
                    </div>
                    <div class="vertical-menu">
                       <div className={activeComponent === "Home" ? "active" : ""}><a  onClick={() => handleDashboardClick1("Home")}>Home</a></div>  
                        <div className={activeComponent === "About" ? "active" : ""}><a  onClick={() => handleDashboardClick1("About")}>About</a></div> 
                        <div className={activeComponent === "Services" ? "active" : ""}><a onClick={() => handleDashboardClick("Services")}>Services</a></div> 
                        <div className={activeComponent === "Settings" ? "active" : ""}><a  onClick={() => handleDashboardClick("Settings")}>Settings</a></div> 
                        <div className={activeComponent === "Blogs" ? "active" : ""}><a onClick={() => handleDashboardClick("Blogs")}>Blogs</a></div> 
                    </div>
                </div>
                <div class="nav-item flex2">
                {searchMainQuery ? <UserProfile filteredProfiles={filteredProfiles}/> :

                    <><div class="center-container">
                       {/* { showArticles ?
                                <Articles /> :  < About/> 
                       } */}
                        {activeComponent === "Home" ? (
                                <Articles />
                            ) : activeComponent === "About" ? (
                                <About />
                            ) : null}
                            </div></>
                }
            </div>
                <div class="nav-item flex3">Item 3
                    <div className="dashboardTopSection">
                                <Graphs />
                    </div>
                </div>
                
       </div></>
    )
}