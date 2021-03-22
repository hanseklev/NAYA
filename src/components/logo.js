import { Link } from "gatsby"
import React from "react"

const SvgLogo = () => (
  <img
    src={require("../images/naya_logo_positiv.svg")}
    width="78px"
    alt="NAYA homepage"
  />
)

export default () => (
  <Link to="/">
    <SvgLogo />
  </Link>
)
