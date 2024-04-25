"use client";
import { config } from "@/helpers/congif";
import Link from "next/link";
import { Nav } from "react-bootstrap";

const SocialMenu = (props) => {
  const menuItems=Object.entries(config.contact.socialMedia);
  return (
    <Nav {...props} >
      {menuItems.map((item) => (
        <Nav.Link key={item[1]} as={Link} href={item[1]}>
          {item[0]}
        </Nav.Link>
      ))}
    </Nav>
  );
};

export default SocialMenu;
