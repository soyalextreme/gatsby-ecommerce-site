import React, { Fragment } from "react"
import Nav from "./Nav"
import { Helmet } from "react-helmet"
import SEO from "../components/SEO"

export default props => {
  return (
    <Fragment>
      <Nav />
      <SEO />
      <main>{props.children}</main>
    </Fragment>
  )
}
