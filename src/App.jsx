import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import PopularCategories from './components/PopularCategories'
import Gallery from './pages/Gallery'
import WeeksDeal from './pages/WeeksDeal'
import BrandsCarousel from './components/BrandsCarousel'
import BestSell from './pages/BestsellCarousel'
import BestsellCarousel from './pages/BestsellCarousel'
import products from './data/products'
import productseggest from './data/productseggest'
import Suggest from './pages/Suggest'
import Landing from './pages/Landing'
import TestimonialsCarousel from './components/TestimonialsCarousel'
import Testimonials from './components/Testimonials'
import MainTestimonials from './pages/MainTestimonials'
import Footer from './components/Footer'
import SubscribeSection from './components/SubscribeSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full h-full  overflow-hidden'>
        <div className="w-full h-[40px] bg-[#4B3EC4] flex items-center justify-center">
  <h6 className="text-white sm:text-sm text-[12px] flex items-center gap-2">
    <span className="bg-white text-[black] px-1 py-0.5  font-bold sm:text-xs text-[8px] rounded-full ">
      special
    </span>
    Get 10% <span className='font-semibold sm:text-xs text-[8px]'>Discount</span> for first order <span className='underline sm:text-xs text-[8px]'>Register Now</span>
  </h6>
</div>

<Navbar/>
<PopularCategories/>
<Gallery/>
<WeeksDeal/>
<BrandsCarousel/>
<BestsellCarousel products={products}/>
<Suggest productseggest={productseggest}/>
<Landing products={products}/>
{/* <TestimonialsCarousel/>
<Testimonials/> */}
<MainTestimonials/>
 

<SubscribeSection/>
<Footer/>

      </div>
   
    </>
  )
}

export default App
