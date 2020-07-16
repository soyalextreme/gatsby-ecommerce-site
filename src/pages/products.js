import React, { Fragment } from "react"
import Layout from "../layout/Layout"
import { graphql } from "gatsby"

// components
import Products from "../components/Products"

const Products = props => {
  const { nodes } = props.data.allStripeProduct

  return (
    <Fragment>
      <Layout>
        <Products data={nodes} />
      </Layout>
    </Fragment>
  )
}

export default Products

export const pageQuery = graphql`
  {
    allStripeProduct {
      nodes {
        name
        id
        description
        active
      }
    }
  }
`
