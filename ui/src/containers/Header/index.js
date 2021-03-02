import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Navbar,
  Form,
  FormControl,
  Row,
  Col,
} from 'react-bootstrap';
import './styles.scss';
import OverriddenBootstrap from './OverriddenBootswatch';

const Header = () => {
  return (
    <>
      <Navbar
        bg="light"
        fixed="top"
        style={OverriddenBootstrap.navbar}
        expand="sm"
      >
        <Container>
          <Row>
            <Col>
              <Navbar.Brand style={OverriddenBootstrap.navBrand}>
                <Link to="/">RauSach</Link>
              </Navbar.Brand>
            </Col>
            <Col>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Tìm Kiếm"
                  style={OverriddenBootstrap.formControl}
                />
              </Form>
            </Col>
            <Col sm={1}>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">a</Navbar.Collapse>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
