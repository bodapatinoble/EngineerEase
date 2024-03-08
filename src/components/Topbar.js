import React,{useState} from "react";
import "./topbar.css";
import Graphs from "./Graphs";
import Articles from "./ArticlesCard";
import userProfile from "../components/articlesData.json";
import UserProfile from "./UserProfile";

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

    const handleSearch = (event) => {
        setSearchMainQuery(event.target.value);
    };

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
                      <div> <a href="/dashboard">Dashboard</a>  </div> 
                      <div> <a href="/users">Users</a></div> 
                      <div> <a href="/settings">Settings</a></div> 
                      <div> <a href="/blogs">Blogs</a></div> 
                      
                    </div>
                </div>
                <div class="nav-item flex2">
                {searchMainQuery ? <UserProfile filteredProfiles={filteredProfiles}/> :

                    <><div class="center-container">
                                <Articles />
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