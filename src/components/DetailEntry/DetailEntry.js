import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { StyledDetailEntry } from './StyledDetailEntry'

const DetailEntry = () => {

    const data=[
        {
            name: "Driver1",
            mail: "driver1@example.com",
            product: "Raw Materials",
            price: "22.224rs",
            date: "11 May 2022",
            place: "Trivandrum",
            status: "Sent"
        },
        {
            name: "Driver2",
            mail: "driver2@example.com",
            product: "Raw Materials",
            price: "4.245rs",
            date: "4 Jun 2022",
            place: "Bangalore",
            status: "Completed"
        },
        {
            name: "Driver3",
            mail: "driver3@example.com",
            product: "Raw Materials",
            price: "6.570rs",
            date: "27 Jun 2022",
            place: "Chennai",
            status: "Sent"
        },
        {
            name: "Driver4",
            mail: "driver4@example.com",
            product: "Raw Materials",
            price: "5.224rs",
            date: "19 Feb 2022",
            place: "Mumbai",
            status: "Sent"
        },
        {
            name: "Driver5",
            mail: "driver5@example.com",
            product: "Raw Materials",
            price: "43.594rs",
            date: "11 May 2022",
            place: "Hyderabad",
            status: "Sent"
        },
    ]
  return (
    <StyledDetailEntry>
        {data.map((person) => (
            <Row className='entry'>
            <Col xs={4} md={2} lg={1}>{person.name}</Col>
            <Col xs={0} md={0} lg={2} className="d-none d-lg-block">{person.mail}</Col>
            <Col xs={0} md={2} lg={2} className="d-none d-md-block">{person.product}</Col>
            <Col xs={0} md={2} lg={1} className="d-none d-md-block">{person.price}</Col>
            <Col xs={0} md={2} lg={2} className="d-none d-md-block">{person.date}</Col>
            <Col xs={4} md={2} lg={2}>{person.place}</Col>
            <Col xs={4} md={2} lg={2}><span className='status'>{person.status}</span></Col>
        </Row>
        ))}
    </StyledDetailEntry>
  )
}

export default DetailEntry