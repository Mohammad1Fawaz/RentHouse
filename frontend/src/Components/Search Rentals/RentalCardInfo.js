// import React from 'react'
// import { Swiper } from 'swiper/react';
// import { Navigation,EffectFade,Pagination,Autoplay } from 'swiper';
// import { useParams } from 'react-router-dom'
// import { ProductsArray } from '../Data';
// export const RentalCardInfo = (props) => {
//     const {name}=useParams();
//     const products=ProductsArray.find((p)=>p.name===name);
//   return (
//     <div>
//     <Swiper
//         modules={[Navigation, EffectFade, Pagination,Autoplay]}
//         navigation
//         pagination={{ clickable: true ,className:"pagination" }}
//         effect={"fade"}
//         slidesPerView={1}
//         loop={Infinity}
//         autoplay={true}
//         speed={1000}
//         className="lg:h-[90vh] rounded-[50px]"
//         >
//     </Swiper>
//         <div className='mt-[50px]'>
//             <h5>{products.price} $/ yearly</h5>
//             <div className='mt-[50px]'>
//                     <img alt="" src="/images/vector2.png" className="inline-block mr-[1%]"></img>
//                     <span>{products.sqft}sqft</span>
//                     <img alt="" src="/images/vector3.png" className="inline-block mr-[1%] ml-[1%]"></img>
//                     <span>{products.rooms}</span>
//                     <img alt="" src="/images/vector4.png" className="inline-block mr-[1%] ml-[1%] w-[15px] h-[15px]"></img>
//                     <span className='inline-block mr-[15px]'>{products.bath}</span>
//                     <span className='bg-[#e7e7e7] text-[orange] text-[18px] text-center px-[20px] py-[5px] rounded-[10px] font-[600]'>for rent</span>
//                     <p className='mt-[50px]'>
//                         {products.description}
//                     </p>
//                     <h1 className='text-black text-[30px]'>Facilities:</h1>
//                     <div className='mt-[50px] w-[80%] xsm:flex-col  lg:flex justify-between'>
//                         {products.facilities.map((item,id)=>{
//                             return (
//                                 <div key={id} className='bg-[#e7e7e7] text-[orange] text-[18px] text-center px-[20px] py-[5px] rounded-[10px] font-[600] mr-[15px] xsm:mb-[15px] md:mb-[10px] lg:mb-0'>{item.facility}</div>
//                             )
//                         })}
//                     </div>
//             </div>
//         </div>
//     </div>
//   )
// }
