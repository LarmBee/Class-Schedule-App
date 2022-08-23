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
      <div className="cards">
      {[
        'Primary',
        'Secondary',
        'Success',
        'Danger',
        'Warning',
        'Info',
        'Light',
        'Dark',
      ].map((variant) => (
        <Card className="cards mb-2"
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
        >
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>{variant} Card Title </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
      </div>
      <h1>Students</h1>
    </div>
  )
}

export default Student
