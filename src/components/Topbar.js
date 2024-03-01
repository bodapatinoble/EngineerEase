import React from "react";
import "./topbar.css";
import Graphs from "./Graphs";
import Articles from "./ArticlesCard";
export default function Topbar(){
    const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const arrow = "<";
    return (
        <><div class="navbar">
            <div className="flex">  
                <img src="purpletalk.png" alt="Company Logo" />
            </div>
            <div class="nav-item flex4">
                 <input className = "EmployeeSearchBar" type="text" placeholder="Search.." />
             </div>
             <div className="flex5">
                    <img  className = "navProfImg" src="avatar_25.jpg" alt="Profile Image" />
                    <img  className = "navProfImg1" src="notification.jpeg" alt="Profile Image" />
                    <img  className = "navProfImg" src="avatar_25.jpg" alt="Profile Image" />
             </div>
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
                    <div className="dashboardTopSection">
                        <Graphs/>
                    </div>
                    <div class="center-container">
                        <Articles />
                    </div>
                </div>
                <div class="nav-item flex3">Item 3</div>
       </div></>
    )
}