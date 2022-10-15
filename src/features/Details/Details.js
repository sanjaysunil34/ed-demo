import React from 'react'
import { Col, Row } from 'react-bootstrap'
import DetailEntry from '../../components/DetailEntry/DetailEntry'
import { StyledDetails } from './StyledDetails'

const Details = () => {
  return (
    <StyledDetails>
        <div className='details-header'>
            Support Requests
        </div>
        <Row className='entry'>
            <Col xs={4} md={2} lg={1}>NAME</Col>
            <Col xs={0} md={0} lg={2} className="d-none d-lg-block">EMAIL</Col>
            <Col xs={0} md={2} lg={2} className="d-none d-md-block">PRODUCT</Col>
            <Col xs={0} md={2} lg={1} className="d-none d-md-block">PRICE</Col>
            <Col xs={0} md={2} lg={2} className="d-none d-md-block">DATE</Col>
            <Col xs={4} md={2} lg={2}>CITY</Col>
            <Col xs={4} md={2} lg={2}>STATUS</Col>
        </Row>

        <DetailEntry />
    </StyledDetails>
  )
}

export default Details