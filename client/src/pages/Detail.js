import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "react-bootstrap";
import { Jumbotron } from "react-bootstrap";
import API from "../utils/API";

const Detail = props => {

  const { id } = useParams();

  const [current, setCurrent] = useState({
    name: {
      first: "David",
      last: "Harris"
    },
    picture: {
      large: "http://placehold.it/300x300"
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
      country:  "String",
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
    <>{current ? (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron className="text-center">
              <h1>
                {current.name.first} {current.name.last}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row className="text-center">
          <Col size="md-10 text-center">
            
            <article>
              <img style={{height: 500, width: 500}} alt={current.name.first} src={current.picture.large}/>
              <h4>{current.phone}</h4>
              <h4>{current.email}</h4>
              <h4>{current.location.street.number} {current.location.street.name} </h4>
              <h4>{current.location.city}, {current.location.state}, {current.location.country}</h4>
              
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Directory</Link>
          </Col>
        </Row>
        
      </Container>
       ) : (
        <div>loading</div>
        )} </>
  );
};


export default Detail;
