
import './App.css'
import Container from './components/Container'
import Flex from './components/Flex'
import Image from './components/Image'
import Menu from './components/Menu'
import Logo from '../src/assets/logo.png'
import { HiBars3BottomLeft } from "react-icons/hi2";
import { FaSearch,FaUser,FaSortDown,FaShoppingCart,FaShuttleVan,FaUndoAlt} from "react-icons/fa";
import { PiNumberTwoBold } from "react-icons/pi";
import Heading from './components/Heading'
 import AdsOne from '../src/assets/Ad_1.jpg'
 import AdsTwo from '../src/assets/Ad_2.png'
 import AdsThree from '../src/assets/Ad_3.jpg'
import Product from './components/Product'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import PrevArrow from './components/PrevArrow'
import NextArrow from './components/NextArrow'



function App() {  
  var settings = {
    
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:<PrevArrow/>,
    nextArrow:<NextArrow/>,
  };
  return (
    <>
    
      {/* Nav Part Start  */}
      <div className="w-full py-6">
        <Container>
           <Flex>
            <div className="w-[40%]">
              <Image ImgSrc={Logo}/>
            </div>
            <div className="w-[60%]">
            <ul>              
                <Flex className={' text-navColor font-dm text-[14px] font-regular gap-x-8'}>
                <Menu menuName={'Home'} className={'hover:text-navHColor hover:font-bold  '}/>
                <Menu menuName={'Shop'} className={'hover:text-navHColor hover:font-bold  '}/>
                <Menu menuName={'About'} className={'hover:text-navHColor hover:font-bold  '}/>
                <Menu menuName={'Contacts'} className={'hover:text-navHColor hover:font-bold  '}/>
                <Menu menuName={'Journal'} className={'hover:text-navHColor hover:font-bold  '}/>
                </Flex>
            </ul>
            </div>
           </Flex>
        </Container>
      </div>
      {/* Nav Part End   */}
      {/* Subnav Part Start  */}
      <div className="w-full bg-subnavColor py-5">
          <Container>
            <Flex>
              <div className="w-[25%]">
                <Flex className={'gap-x-4'}>
                  <div className="">
                  <HiBars3BottomLeft />
                  </div>
                  <div className="w font-dm text-sm text-navHColor ">Shop by Category</div>
                </Flex>
              </div>
              <div className="w-[50%] relative">
                <input type="text" className='p-3 bg-white rounded-lg w-full'placeholder='Search Products' />
                <FaSearch className='absolute right-4 top-1/2 -translate-y-1/2'/>
              </div>
              <div className="w-[25%] pt-3">
                <Flex className={'justify-end'}>
                <FaUser/>
                <FaSortDown className='ml-1'/>
                <FaShoppingCart className='ml-7'/>
                </Flex>
              </div>
            </Flex>
          </Container>
      </div>
      {/* Subnav Part End */}
      {/* Banner Part Start  */}
      <div className="bg-bannerImg bg-cover bg-center bg-no-repeat py-[300px] ">
        
      </div>
      {/* Banner Part End  */}
      {/* Inpormation Part Start  */}
      <div className="w-full py-5 ">
       <Container>
        <Flex className={'justify-center gap-x-96'}>
         <div className="w-[30%]">
          <Flex className={'gap-x-2'}>
          <PiNumberTwoBold className='pt-1 text-[20px]'/>
          <Heading as={'h3'} text={'Two years warranty'} className={'font-dm font-regular text-navHColor text-[16px]'}/>
          </Flex>
         </div>
         <div className="w-[30%]">
          <Flex className={'gap-x-2'}>
          <FaShuttleVan className='pt-1 text-[20px]'/>
          <Heading as={'h3'} text={'Two years warranty'} className={'font-dm font-regular text-navHColor text-[16px]'}/>
          </Flex>
         </div>
         <div className="w-[30%]">
          <Flex className={'gap-x-2'}>
          <FaUndoAlt className='pt-1 text-[20px]'/>
          <Heading as={'h3'} text={'Two years warranty'} className={'font-dm font-regular text-navHColor text-[16px]'}/>
          </Flex>
         </div>
        </Flex>
       </Container>
      </div>
      {/* Inpormation Part End   */}
      {/* Ads Part Start  */}
       <div className="w-full py-[60px]">
        <Container>
          <Flex className={'justify-between'}>
            <div className="w-[49%]">
              <Image ImgSrc={AdsOne}/>
            </div>
            <div className="w-[49%]">
            <Image ImgSrc={AdsTwo}/>
            <Image ImgSrc={AdsThree} className={'mt-9'}/>
            </div>
          </Flex>
        </Container>
      </div> 
      {/* Ads Part End  */}
      {/* Product Part Start  */}
    <div className="w-full py-[70px] ">
        <Container>
          <Heading as={'h3'} text={'New Arrivals'} className={'font-dm font-bold text-[39px] pb-10'} />
          
          <Slider {...settings}>
    <div className="w-[24%] relative group px-2">
              <Product/>
    </div>
     <div className="w-[24%] relative group px-2">
              <Product/>
    </div>
    <div className="w-[24%] relative group px-2">
              <Product/>
    </div>
    <div className="w-[24%] relative group px-2">
              <Product/>
    </div>
    <div className="w-[24%] relative group px-2">
              <Product/>
    </div> 
    </Slider>
          
        </Container>
      </div>
      {/* Product Part End */}


      
    {/* <div className="w-full py-[70px] ">
        <Container>
          <Heading as={'h3'} text={'Our Bestsellers'} className={'font-dm font-bold text-[39px] pb-10'} />
          
          <Slider {...settings}>
    <div className="w-[24%] relative group px-2">
              <Product/>
    </div>
    <div className="w-[24%] relative group px-2">
              <Product/>
    </div>
    <div className="w-[24%] relative group px-2">
              <Product/>
    </div>
    <div className="w-[24%] relative group px-2">
              <Product/>
    </div>
    <div className="w-[24%] relative group px-2">
              <Product/>
    </div>
    </Slider>
          
        </Container>
      </div> */}

    </>
  )
}

export default App
