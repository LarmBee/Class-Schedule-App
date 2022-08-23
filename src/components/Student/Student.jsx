import React from 'react'
import "./student.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Student() {
  return (
    <div className="Container" >
    <Container className='contai '>
        <Row>
          <Col sm={8}>
            <h1 className='col mt-0'>
              hello <span>Super Admin</span>
            </h1>
          </Col>
          <Col sm={4}>
            <div className="user mt-0">
              <img
                src="https://img.icons8.com/metro/2x/user-male-circle.png"
                alt="User"
              />
              <a href="#edit">Edit</a>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="announcements">
      <Container><Card style={{ width: '18rem', height:"80vh"}}>
      <Card.Body>
        <Card.Title>Announcements</Card.Title>
      </Card.Body>
    </Card></Container>
      </div>
      <div className='news'>
      <div className='ne p-5'>
        <h1 className='h1-news'>Sessions</h1>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card h-100">
              <img src="https://images.unsplash.com/photo-1525921429624-479b6a26d84d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29sbGVnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Effective Renewable energy</h5>
              </div>
              <div class="card-footer">
                <p>May 5, 2020</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29sbGVnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Effective Renewable energy</h5>
              </div>
              <div class="card-footer">
              <p>June 5, 2021</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y29sbGVnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Effective Renewable energy</h5>
              </div>
              <div class="card-footer">
              <p>May 5, 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Student
