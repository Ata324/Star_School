import { config } from "@/helpers/config";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { NavbarBrand } from "react-bootstrap";

const Logo = ({ type = "dark" }) => {
	return (
		<NavbarBrand href="/" as={Link}>
			<Image
				src={`/images/logo/logo6.jpg`}
				width={199}
				height={69}
				alt={config.project.name}
				objectFit="cover"
			/>
		</NavbarBrand>
	);
};

export default Logo;
