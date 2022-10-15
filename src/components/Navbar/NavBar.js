import React from 'react'
import { StyledNavbar } from './StyledNavbar'
import { Navbar, Nav } from 'react-bootstrap'

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonIcon from '@mui/icons-material/Person';

const NavBar = ({setShowSidePane, showSidePane}) => {
  return (
    <StyledNavbar>
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <div className='contain'>
          <div className='contain-flex'>
            <Navbar.Brand><div className='head-icon-drop' onClick={(() => setShowSidePane(!showSidePane))}>{showSidePane ? <NavigateBeforeIcon /> : <NavigateNextIcon />}</div><div className='head-icon'><ArrowBackIcon /></div>Supply Chain</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          </div>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
              <Nav.Link href="#deets1"><SearchOutlinedIcon /></Nav.Link>
              <Nav.Link href="#deets2"><NotificationsNoneOutlinedIcon /></Nav.Link>
              <Nav.Link href="#deets3"><EmailOutlinedIcon /></Nav.Link>
              <Nav.Link href="#deets4"><PersonIcon /></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
    </Navbar>
    </StyledNavbar>
  )
}

export default NavBar