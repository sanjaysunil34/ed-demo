import React from 'react'

import { Card, Col, Row } from 'react-bootstrap'
import { ResponsiveContainer, BarChart, Bar } from 'recharts';
import { StyledCardLayout } from './StyledCardLayout'

import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const CardLayout = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2000,
      amt: 2400
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 500,
      amt: 2210
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 1000,
      amt: 2290
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 2000,
      amt: 2000
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 500,
      amt: 2181
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 2500,
      amt: 2500
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 1600,
      amt: 2100
    }
  ];
  return (
    <StyledCardLayout>
        <Card style={{ width: '30%' }}>
            <Card.Body>
              <div className='card-head'>
                <div className='card-city'>Chennai</div>
                <div className='dropdown'>Daily</div>
              </div>
              <div className='card-main'>
                <div className='number'>199<div className='numb-per-neg'>-3.7%</div></div>
                <div className='graph'>
                  <BarChart
                    width={150}
                    height={50}
                    data={data}
                    margin={{
                      top: 5,
                      right: 15,
                      left: 25,
                      bottom: 5
                    }}
                    barSize={8}
                  >
                    <Bar dataKey="pv" fill="#546dfe" radius={[10, 10, 10, 10]} />
                  </BarChart>

                </div>
              </div>
              <div className='card-foot'>
                <Row>
                  <Col>
                    <div className='foot-flex'>
                      33
                      <div className='up-arrow'>
                        <ArrowOutwardIcon/>
                      </div>
                    </div>
                    <div className='foot-key'>
                      Completed
                    </div>
                  </Col>
                  <Col>
                    <div className='foot-flex'>
                      3.25%
                      <div className='up-arrow'>
                        <ArrowOutwardIcon/>
                      </div>
                    </div>
                    <div className='foot-key'>
                      On Time
                    </div>
                  </Col>
                  <Col>
                    <div className='foot-flex'>
                      330
                      <div className='up-arrow'>
                        <ArrowOutwardIcon/>
                      </div>
                    </div>
                    <div className='foot-key'>
                      Supplies
                    </div>
                  </Col>
                </Row>
              </div>
            </Card.Body>
        </Card>


        <Card style={{ width: '30%' }}>
            <Card.Body>
              <div className='card-head'>
                <div className='card-city'>Mumbai</div>
                <div className='dropdown'>Daily</div>
              </div>
              <div className='card-main'>
                <div className='number'>27<div className='numb-per-pos'>+2.5%</div></div>
                <div className='graph'>

                <BarChart
                  width={150}
                  height={50}
                  data={data}
                  margin={{
                    top: 5,
                    right: 15,
                    left: 25,
                    bottom: 5
                  }}
                  barSize={8}
                >
                  <Bar dataKey="pv" fill="#ffba57" radius={[10, 10, 10, 10]} />
                </BarChart>


                </div>
              </div>
              <div className='card-foot'>
              <Row>
                  <Col>
                    <div className='foot-flex'>
                      2
                      <div className='up-arrow'>
                        <ArrowOutwardIcon/>
                      </div>
                    </div>
                    <div className='foot-key'>
                      Completed
                    </div>
                  </Col>
                  <Col>
                    <div className='foot-flex'>
                      4.5%
                      <div className='up-arrow'>
                        <ArrowOutwardIcon/>
                      </div>
                    </div>
                    <div className='foot-key'>
                      On Time
                    </div>
                  </Col>
                  <Col>
                    <div className='foot-flex'>
                      20
                      <div className='down-arrow'>
                        <ArrowOutwardIcon/>
                      </div>
                    </div>
                    <div className='foot-key'>
                      Supplies
                    </div>
                  </Col>
                </Row>
              </div>
            </Card.Body>
        </Card>


        <Card style={{ width: '30%' }}>
            <Card.Body>
              <div className='card-head'>
                <div className='card-city'>Bangalore</div>
                <div className='dropdown'>Daily</div>
              </div>
              <div className='card-main'>
                <div className='number'>44<div className='numb-per-pos'>+3.1%</div></div>
                <div className='graph'>

                <BarChart
                  width={150}
                  height={50}
                  data={data}
                  margin={{
                    top: 5,
                    right: 15,
                    left: 25,
                    bottom: 5
                  }}
                  barSize={8}
                >
                  <Bar dataKey="pv" fill="#ed5b86" radius={[10, 10, 10, 10]} />
                </BarChart>


                </div>
              </div>
              <div className='card-foot'>
              <Row>
                  <Col>
                    <div className='foot-flex'>
                      15
                      <div className='up-arrow'>
                        <ArrowOutwardIcon/>
                      </div>
                    </div>
                    <div className='foot-key'>
                      Completed
                    </div>
                  </Col>
                  <Col>
                    <div className='foot-flex'>
                      10.1%
                      <div className='up-arrow'>
                        <ArrowOutwardIcon/>
                      </div>
                    </div>
                    <div className='foot-key'>
                      On Time
                    </div>
                  </Col>
                  <Col>
                    <div className='foot-flex'>
                      150
                      <div className='down-arrow'>
                        <ArrowOutwardIcon/>
                      </div>
                    </div>
                    <div className='foot-key'>
                      Supplies
                    </div>
                  </Col>
                </Row>
              </div>
            </Card.Body>
        </Card>
    </StyledCardLayout>
  )
}

export default CardLayout