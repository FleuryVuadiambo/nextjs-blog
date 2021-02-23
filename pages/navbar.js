import React from "react";
import { Container, Nav, NavItem, NavLink, Row } from "reactstrap";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import styles from "../styles.module.css";

function Navbar() {
  return (
    <div className={styles.home}>
      <Container className={styles.menu}>
        <Row>
          <Nav
            activeKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
          >
            <NavItem>
              <NavLink href="/home">Accueil</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="./about" eventKey="link-1">A propos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink eventKey="link-2">Contact</NavLink>
            </NavItem>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-primary">Search</Button>
            </Form>
          </Nav>
        </Row >
      </Container>
    </div>
  );
}

export default Navbar;