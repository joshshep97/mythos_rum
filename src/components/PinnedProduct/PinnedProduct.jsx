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
    <section className='pinned'>
      <h2 className='pinned__heading'>Our Picks for You</h2>
      <section className='pinned__wrapper'>
        <article className='pin'>
          <h3 className='pin__title'>
            {product.name}
          </h3>
          <p className='pin__desc'>
            {product.desc}
          </p>
          <h4 className='pin__price'>
            £{product.price}
          </h4>
          <button className='btn_primary'>Buy Now</button>
        </article>
        <article className='pin'>
          <h3 className='pin__title'>
            {product.name}
          </h3>
          <p className='pin__desc'>
            {product.desc}
          </p>
          <h4 className='pin__price'>
            £{product.price}
          </h4>
          <button className='btn_primary'>Buy Now</button>
        </article>
      </section>
    </section>
  )
}

export default PinnedProduct