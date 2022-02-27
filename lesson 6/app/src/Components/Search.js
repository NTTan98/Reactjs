import React, { useState, useEffect, useRef } from "react";
import { Form, Card, Container, Row, Col, ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Search.scss";

const Search = () => {
  const [data, setData] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [numberData, setNumberData] = useState([10]);
  const typingTimeoutRef = useRef(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://randomuser.me/api/?results=${numberData}`
        );
        const result = await response.json();
        setData(result.results);
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
  }, [numberData]);

  function handleClick(e) {
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    typingTimeoutRef.current = setTimeout(() => {
      setNumberData(e.target.value);
    }, 300);
  }
  function handleClickSearch(e) {
    setSearchKey(e.target.value);
  }
  const ArrFilter = data.filter((item) =>
    searchKey
      ? item.name.last.toLowerCase().includes(searchKey.toLowerCase())
      : true
  );
  const placeholderText = `Before Number: ${numberData}`;
  return (
    <div className="Card__Container">
      <Form.Label htmlFor="input">SEARCH </Form.Label>
      <div className="Card__Input">
        <Form.Control
          type="text"
          id="text__Search"
          placeholder="Enter key Search (First Name)"
          onChange={handleClickSearch}
        />
        <Form.Control
          className="Text__Fill"
          type="text"
          id="Text__Fill"
          onChange={handleClick}
          placeholder={placeholderText}
        />
      </div>
      <Container>
        <Row>
          {ArrFilter.map((results) => (
            <Col xs={4}>
              <Card style={{ width: "18rem" }}>
                <Card.Header>Profile</Card.Header>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    Name: {results.name.title} {results.name.first}{" "}
                    {results.name.last}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Address: {results.location.country}
                  </ListGroup.Item>
                  <ListGroup.Item>Phone: {results.phone}</ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Search;
