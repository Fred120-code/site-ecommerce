import React from 'react'
import Heading from '../Shared/Heading'
import ProductCard from './ProductCard'
import casque_2 from '../../assets/casuqe_2.png'

const ProductsData = [
    {
        id:1,
        img: casque_2,
        title:"Boat HeadPhone",
        price:"120",
        aosDelay:"0"
    },
     {
        id:2,
        img: casque_2,
        title:"Rocky Mountain",
        price:"420",
        aosDelay:"200"
    },
     {
        id:3,
        img: casque_2,
        title:"Goggles",
        price:"320",
        aosDelay:"400"
    },
     {
        id:4,
        img: casque_2,
        title:"Printed",
        price:"220",
        aosDelay:"600"
    },
]
const Product = () => {
  return (
    <div>
        <div className="container">
            {/** Head section*/}
            <Heading title="Our Product"
                subtitle="Explore Our Products"/>
            {/** Body section*/}
            <ProductCard data = {ProductsData}/>
        </div>
    </div>
  )
}

export default Product