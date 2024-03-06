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
    const arrow = "<";
    const [searchMainQuery, setSearchMainQuery] = useState(""); // State to hold the search query

    const handleSearch = (event) => {
        setSearchMainQuery(event.target.value);
    };

     // Filter the userProfile based on the searchMainQuery
     const filteredProfiles = userProfile.filter(profile =>
        profile.skills.some(skill =>
            skill.toLowerCase().includes(searchMainQuery.toLowerCase())
        )
    );
    return (
        <><div class="navbar">
            <div className="flex">  
                <img src="purpletalk.png" alt="Company Logo" />
            </div>
            <div class="nav-item flex4">
                 <input className = "EmployeeSearchBar" type="text" placeholder="EmplSearch.." 
                 value={searchMainQuery}
                 onChange={handleSearch}/>
             </div>
             <div className="flex5">
                    <img  className = "navProfImg" src="avatar_25.jpg" alt="Profile Image" />
                    <img  className = "navProfImg1" src="notification.jpeg" alt="Profile Image" />
                    <img  className = "navProfImg" src="avatar_25.jpg" alt="Profile Image" />
             </div>
             {/* {searchMainQuery && <UserProfile userProfile={filteredProfiles} />} */}
           </div>
        <div class="navbar">
                <div class="nav-item flex1">
                    {/* Profile Image with Name */}
                    <div className="profile1">
                        <img src="avatar_25.jpg" alt="Profile Image" />
                        <span className="profile-name">John Doe</span>
                    </div>
                    <div class="vertical-menu">
                        <div>Dashboard</div>
                        <div>Users</div>
                        <div>Categories</div>
                        <div>Settings</div>
                        <div>Blogs</div>
                    </div>
                </div>
                <div class="nav-item flex2">
                {searchMainQuery ? <UserProfile userProfile={filteredProfiles}/> :

                    <><div className="dashboardTopSection">
                            <Graphs />
                        </div><div class="center-container">
                                <Articles />
                            </div></>
}
                </div>
                <div class="nav-item flex3">Item 3</div>
                
       </div></>
    )
}