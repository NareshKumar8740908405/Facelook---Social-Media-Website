import React from 'react'
import "./topbar.css";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function Topbar() {
  return (
    <div className='topbarContainer'>
      <div className="topbarLeft">
        <span className="logo">Facelook</span>
    </div>
    <div className="topbarCenter">
        <div className="searchbar">
           <SearchIcon className='searchIcon'/>
           <input placeholder='Search for Friend, post or video' className="searchInput" />
        </div>
    </div>
    <div className="topbarRight">
      <div className="tobarlinks">
        <span className="topbarLink">Homepage</span>
        <span className="topbarLink">Timeline</span>
      </div>
      <div className="topbarIcons">
        <div className="topbarIconItem">
          <PersonIcon className='searchIcon'/>
          <span className="topbarIconBadge">1</span>
        </div>
        <div className="topbarIconItem">
          <ChatIcon className='searchIcon'/>
          <span className="topbarIconBadge">2</span>
        </div>
        <div className="topbarIconItem">
          <NotificationsIcon className='searchIcon'/>
          <span className="topbarIconBadge">1</span>
        </div>
      </div>
      <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
    </div>
    </div>
  )
}
