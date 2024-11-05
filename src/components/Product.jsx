import React from 'react'
import Badge from './Badge'
import Image from './Image'
import Pro1 from '../assets/product.png'

import { FaHeart,FaShoppingCart  } from "react-icons/fa";
import Flex from './Flex';
import { IoGitCompareOutline } from "react-icons/io5";
import Heading from './Heading';


const Product = () => {
  return (
    <>
    <Badge badgeName={'New'} className={'absolute top-4 left-4'}/>
    <Image ImgSrc={Pro1}/>
    <div className="bg-white w-full p-5  absolute invisible group-hover:visible bottom-3 right-0 mb-3">
        <Flex className={'justify-end gap-x-2'}>
        Add to Wish List<FaHeart />
        </Flex>
        <Flex className={'justify-end gap-x-2'}>
        Compare<IoGitCompareOutline />
        </Flex>
        <Flex className={'justify-end gap-x-2'}>
        Add to Cart <FaShoppingCart  />
        </Flex>
    </div>
    <Flex className={'justify-between'}>
    <Heading as={'h3'} text={'Basic Crew Neck Tee'}/>
    <Heading as={'h3'} text={'$44.00'}/>
    </Flex>

    </>
  )
}

export default Product
