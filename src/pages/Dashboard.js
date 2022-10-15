import React, { useState } from 'react';

import NavBar from '../components/Navbar/NavBar';
import { Row, Col} from 'react-bootstrap';
import { StyledDashboard } from './StyledDashboard';
import CardLayout from '../features/CardLayout/CardLayout';
import Details from '../features/Details/Details';
import SideBox from '../features/SideBox/SideBox';


export const Dashboard = () => {
  const [showSidePane, setShowSidePane] = useState(false);

  return (
    <StyledDashboard>
        <NavBar showSidePane={showSidePane} setShowSidePane={setShowSidePane}/>
        <Row>
            <Col lg={0} xl={2} className={showSidePane ? "side-pane-show" : "side-pane-hide"}>
                <SideBox/>
            </Col>
            <Col lg={12} xl={10}>
                <CardLayout/>
                <Details />
            </Col>
        </Row>
  </StyledDashboard>
  )
}
