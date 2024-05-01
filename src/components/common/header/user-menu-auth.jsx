"use client";
import { useState } from "react";
import { Button, Offcanvas, Nav } from "react-bootstrap";
import userMenuData from "../../../helpers/data/user-menu.json";
import Link from "next/link";
import LogoutButton from "./logout-button";

const UserMenuAuth = ({ session }) => {
  const { role, name } = session.user;
  const userMenu = userMenuData[role.toLowerCase()];

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {name}
      </Button>

      <Offcanvas show={show} onHide={handleClose} collapseOnSelect={true} data-bs-thema="dark">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>User Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            {userMenu.map((item) => (
              <Nav.Link key={item.link} as={Link} href={item.link}>
                {item.title}
              </Nav.Link>
            ))}
               <hr/>
               <LogoutButton/>

          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default UserMenuAuth;
