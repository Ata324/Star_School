import { config } from "@/helpers/config";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { NavbarBrand } from "react-bootstrap";

const Logo = ({ type = "dark" }) => {
	return (
		<NavbarBrand href="/" as={Link}>
			<Image
				src={`/images/logo/star.webp`}
				width={240}
				height={79}
				alt={config.project.name}
				objectFit="cover"
				className="rounded-4 bg-light"
			/>
		</NavbarBrand>
	);
};

export default Logo;
