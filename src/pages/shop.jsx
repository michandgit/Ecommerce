import React from 'react'
import { Product } from './product';
import { PRODUCTS } from '../products'
import "./shop.css"

export const Shop = () => {
  return (
    <div className='shop'>
        <div className='heading'>
            <h2>Developer Chandsi's Ecommerce Shop</h2>
        </div>

        <div className='products'>
            {
                PRODUCTS.map((product)=>(
                    <Product data={product} />
                ))
            }

        </div>
    </div>
  )
}
