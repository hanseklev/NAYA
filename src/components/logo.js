import { Link } from "gatsby";
import React from "react";
import LogoSvg from "../images/naya_logo_positiv.svg";

const Logo = () => (
  <Link to="/">
    <img
      src={LogoSvg}
      width="78px"
      alt="NAYA homepage"
      aria-label="NAYA logo"
    />
  </Link>
);

export default Logo;
