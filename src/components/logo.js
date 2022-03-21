import { Link } from "gatsby";
import React from "react";
import LogoSvg from "../images/naya_logo_positiv.svg";

const Logo = ({width="78px"}) => (
  <Link to="/">
    <img
      src={LogoSvg}
      width={width}
      alt="NAYA logo"
      aria-label="NAYA"
    />
  </Link>
);

export default Logo;
