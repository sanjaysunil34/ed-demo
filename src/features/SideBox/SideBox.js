import React, { useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import WindowOutlinedIcon from '@mui/icons-material/WindowOutlined';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DescriptionIcon from '@mui/icons-material/Description';
import ForumIcon from '@mui/icons-material/Forum';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

import { StyledSideBox } from './StyledSideBox'

const SideBox = () => {
  const [selectedTile, setSelectedTile] = useState("Dashboard");

  return (
    <StyledSideBox>
        <div className='menu-cate'>
            <div className={selectedTile === "Dashboard" ? 'selected-menu-item' : 'menu-item'} onClick={() => setSelectedTile("Dashboard")}><div className={selectedTile === "Dashboard" ? 'selected-side-icon' : 'side-icon'}><HomeIcon/></div>Dashboard</div>
            <div className={selectedTile === "Trucks" ? 'selected-menu-item' : 'menu-item'} onClick={() => setSelectedTile("Trucks")}><div className={selectedTile === "Trucks" ? 'selected-side-icon' : 'side-icon'}><WindowOutlinedIcon/></div>Trucks</div>
            <div className={selectedTile === "Supplies" ? 'selected-menu-item' : 'menu-item'} onClick={() => setSelectedTile("Supplies")}><div className={selectedTile === "Supplies" ? 'selected-side-icon' : 'side-icon'}><ContentCopyIcon /></div>Supplies</div>
        </div>
        <div className='menu-cate'>
            <div className='menu-title'>HELP</div>
            <div className={selectedTile === "Terms" ? 'selected-menu-item' : 'menu-item'} onClick={() => setSelectedTile("Terms")}><div className={selectedTile === "Terms" ? 'selected-side-icon' : 'side-icon'}><DescriptionIcon /></div>Terms</div>
            <div className={selectedTile === "Support" ? 'selected-menu-item' : 'menu-item'} onClick={() => setSelectedTile("Support")}><div className={selectedTile === "Support" ? 'selected-side-icon' : 'side-icon'}><ForumIcon /></div>Support</div>
            <div className={selectedTile === "FAQ" ? 'selected-menu-item' : 'menu-item'} onClick={() => setSelectedTile("FAQ")}><div className={selectedTile === "FAQ" ? 'selected-side-icon' : 'side-icon'}><HelpOutlineOutlinedIcon /></div>FAQ</div>
        </div>
        <div>
            <div className='menu-title'>SETTINGS</div>
            <div className={selectedTile === "Upgrade" ? 'selected-menu-item' : 'menu-item'} onClick={() => setSelectedTile("Upgrade")}>Upgrade</div>
        </div>
    </StyledSideBox>
  )
}

export default SideBox