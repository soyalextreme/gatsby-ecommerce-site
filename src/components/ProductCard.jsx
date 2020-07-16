import React from "react"
import { Fragment } from "react"

const ProductCard = ({ product }) => {
  return (
    <Fragment>
      <article className="card">
        <header>
          <h2 className="font-bold uppercase text-2xl">{product.name}</h2>
        </header>
      </article>
    </Fragment>
  )
}

export default ProductCard
