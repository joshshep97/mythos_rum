import React from 'react'
import './PinnedProduct.css'
import ProductPic from '../../assets/rum_pic.jpg'

const PinnedProduct = () => {
  const product = {
    name: 'HoneyMead',
    desc: 'The sweet and honeyed notes of the spirit of the Norse Gods are balanced by the smooth, warming qualities of rum. With its rich history and unique blend, this rum is a true celebration of the art of distillation',
    price: 24.99,
    img: {ProductPic}
  }

  return (
    <div className='section'>
      <h2 className='about__heading'>
        Our Picks for you
      </h2>
      <section className="pinned__wrapper">
      <article className='pinned'>
      <h3>{product.name}</h3>
      <p className='pinned__paragraph'>
        {product.desc}
      </p>
      <h4>
        £{product.price}
      </h4>
      <button className="btn_primary pinned__btn">
        Buy Now
      </button>
    </article>
    <article className='pinned'>
      <h3>{product.name}</h3>
      <p className='pinned__paragraph'>
        {product.desc}
      </p>
      <h4>
        £{product.price}
      </h4>
      <button className="btn_primary pinned__btn">
        Buy Now
      </button>
    </article>
    </section>
    </div>
  )
}

export default PinnedProduct