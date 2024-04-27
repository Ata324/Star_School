"use client";
import { Button, Container, Form, Nav, Navbar, Offcanvas } from "react-bootstrap";
import Logo from "./logo";
import MainMenu from "./main-menu";
import ButtonCallNow from "./button-call-now";

const MainMenuBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary py-3 ">
      <Container>
        <Logo />
        <Navbar.Toggle aria-controls="main-menu" />
        <Navbar.Offcanvas
          id="main-menu"
          aria-labelledby="main-menu-label"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="main-menu-label">
            <Logo />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
          <MainMenu className="justify-content-center flex-grow-1 pe-3 m-0 "/>
           <ButtonCallNow/>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default MainMenuBar;
