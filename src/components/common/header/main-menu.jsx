"use client";
import data from "@/helpers/data/main-menu.json";
import Link from "next/link";
import { Nav } from "react-bootstrap";

const MainMenu = (props) => {
  return (
    <Nav {...props} >
      {data.map((item) => (
        <Nav.Link key={item.link} as={Link} href={item.link}>
          {item.title}
        </Nav.Link>
      ))}
    </Nav>
  );
};

export default MainMenu;
