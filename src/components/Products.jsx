import React, { Fragment } from "react"
import ProductCard from "./ProductCard"

const Products = ({ data }) => {
  return (
    <Fragment>
      <ul>
        {data.map(item => (
          <ProductCard key={item.id} product={item} />
        ))}
      </ul>
    </Fragment>
  )
}

export default Products
