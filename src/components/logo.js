import { Link } from "gatsby"
import React from "react"

const SvgLogo = () => (
  <img
    src={require("../images/naya_logo_positiv.svg")}
    width="78px"
    alt="NAYA homepage"
    aria-label="NAYA logo"
  />
)

export default () => (
  <Link to="/">
    <SvgLogo />
  </Link>
)
