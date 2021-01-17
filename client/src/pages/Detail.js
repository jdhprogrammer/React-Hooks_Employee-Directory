import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {Col, Row, Container, Card, Button} from "react-bootstrap";
import Hero from "../components/Hero/Hero";
import API from "../utils/API";

const Detail = props => {

  const {id} = useParams();

  const [current, setCurrent] = useState({
    name: {
      first: "David",
      last: "Harris"
    },
    picture: {
      large: ""
    },
    name: {
      title: "String",
      first: "String",
      last: "String",
    },
    location: {
      street: {
        number: "String",
        name: "String",
      },
      city: "String",
      state: "String",
      country: "String",
      postcode: "String",
      coordinates: {
        latitude: "String",
        longitude: "String"
      },
      timezone: {
        offset: "String",
        description: "String"
      }
    },
    email: "String",
    login: {
      uuid: "String",
      username: "String",
      password: "String",
      salt: "String",

      md5: "String",

      sha1: "String",
      sha256: "String"
    },
    dob: {
      date: "String",
      age: "String"
    },
    registered: {
      date: "String",
      age: "String"
    },
    phone: "String",
    cell: "String",
    ID: {
      name: "String",
      value: "String"
    },
  });



  useEffect(() => {
    API.getEmployee(id)
      .then(res => setCurrent(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <Hero backgroundImage="">
        <h1>Employee Directory</h1>
      </Hero>
      <Container>
        <Row>
          <Col size="md-10" style={{paddingTop: '10px'}}>
            <Card className="mx-auto" style={{width: '18rem'}}>
              <Card.Img variant="top" alt={current.name.first} src={current.picture.large} />
              <Card.Body>
                <Card.Title>{current.name.first} {current.name.last}</Card.Title>
                <Card.Text>
                  <h6>{current.phone}</h6>
                  <h6>{current.email}</h6>
                  <h6>{current.location.street.number} {current.location.street.name} </h6>
                  <h6>{current.location.city}, {current.location.state}, {current.location.country}</h6>
                </Card.Text><Link to="/">
                  <Button variant="primary">← Back to Directory</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

    </div>
  )
};


export default Detail;
