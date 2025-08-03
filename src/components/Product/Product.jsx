import React from 'react'
import Heading from '../Shared/Heading'
import ProductCard from './ProductCard'
import casque_6 from '../../assets/casqueu_6.png'
import airpod_1 from '../../assets/airpod_1.png'
import airpod_2 from '../../assets/airpod_2.png'
import casque_3 from '../../assets/casque_3.png'
import casque_4 from '../../assets/casque_4.png'
import casque_8 from '../../assets/casque_8.png'

const ProductsData1 = [
    {
        id:1,
        img: casque_6,
        title:"Boat HeadPhone",
        price:"120",   
        aosDelay:"0"
    },
     {
        id:2,
        img: airpod_1,
        title:"Rocky Mountain",
        price:"420",
        aosDelay:"200"
    },
     {
        id:3,
        img: casque_3,
        title:"Goggles",
        price:"320",
        aosDelay:"400"
    },
     {
        id:4,
        img: airpod_2,
        title:"Printed",
        price:"220",
        aosDelay:"600"
    },
]
const ProductsData2 = [
    {
        id:1,
        img: casque_4,
        title:"Boat HeadPhone",
        price:"120",   
        aosDelay:"0"
    },
     {
        id:2,
        img: casque_8,
        title:"Rocky Mountain",
        price:"420",
        aosDelay:"200"
    },
     {
        id:3,
        img: casque_3,
        title:"Goggles",
        price:"320",
        aosDelay:"400"
    },
     {
        id:4,
        img: airpod_2,
        title:"Printed",
        price:"220",
        aosDelay:"600"
    },
]
const Product = () => {
  return (
    <div>
        <div className=" container flex flex-col gap-8">
            {/** Head section*/}
            <Heading title="Our Product"
                subtitle="Explore Our Products"/>
            {/** Body section*/}
            <ProductCard data = {ProductsData1}/>
            <ProductCard data = {ProductsData2}/>
        </div>
    </div>
  )
}

export default Product