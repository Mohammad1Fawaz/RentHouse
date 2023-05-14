import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,EffectFade,Pagination,Autoplay } from 'swiper';
import 'swiper/css';
import "swiper/css/effect-fade";
import "swiper/swiper-bundle.min.css";
import "swiper/css/pagination";
import 'swiper/css/autoplay';
import './SearchRental.css'
const RentalCard = (props) => {
    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
      }
      const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];
      const [fullscreen, setFullscreen] = useState(true);
      const [show, setShow] = useState(false);
  return (
    <div className='RentalCard xsm:w-[21rem] md:w-[25rem]'>
        <div>
            <div className='relative' onClick={()=>{handleShow(values)}}>
                <img alt='' src={props.src} className='w-[100%] rounded-[8px]'/>
                <div className="for-rent absolute w-[115px] h-[40px] top-0 left-0  rounded-tl-[8px] rounded-br-[55px] bg-[#FF8D1B] capitalize  text-white font-[500] flex justify-center content-center">
                    <h6 className='text-white self-center text-[20px]'>for rent</h6>
                    <p className='hidden text-[30px]'>click to know more</p>
                </div>
            </div>
        </div>
        <div>
            <h5 className='mt-[2%]'>{props.name}</h5>
            <div>
                <img alt="" src="/images/vector.png" className="inline-block mr-[5%]"></img>
                <span>Lebanon, saksakieh</span>
            </div>
            <div className='mt-[10px]'>
                <img alt="" src="/images/vector2.png" className="inline-block mr-[5%]"></img>
                <span>{props.sqft}sqft</span>
                <img alt="" src="/images/vector3.png" className="inline-block mr-[5%] ml-[5%]"></img>
                <span>{props.rooms}</span>
                <img alt="" src="/images/vector4.png" className="inline-block mr-[5%] ml-[5%] w-[15px] h-[15px]"></img>
                <span>{props.bath}</span>
                <p className='text-[orange] text-[30px] font-semibold mt-[10px]'>{props.price} $</p>
            </div>
        </div>
            <Modal  dialogClassName="my-modal" show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header closeButton className='flex !justify-center'>
                    <div className='w-[100%]'>
                        <Modal.Title className="text-[orange] text-center !text-[30px]">{props.name}</Modal.Title>
                    </div> 
                </Modal.Header>
                <Modal.Body className=''>
                    <div>
                        <Swiper
                            modules={[Navigation, EffectFade, Pagination,Autoplay]}
                            navigation
                            pagination={{ clickable: true ,className:"pagination" }}
                            effect={"fade"}
                            slidesPerView={1}
                            loop={Infinity}
                            autoplay={true}
                            speed={1000}
                            className="lg:h-[90vh] rounded-b-[50px]"
                            >
                            {props.imagesArray.map((item,id) => (
                                <SwiperSlide className="" key={id}>
                                    <div className="">
                                        <img
                                        src={`http://localhost:8000/${item.src}`}
                                        alt="image1"
                                        className="w-[100%]"
                                        ></img>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                            <div className='mt-[50px]'>
                                <h5>{props.price} $/ {props.frequency}</h5>
                                <div className='mt-[50px]'>
                                        <img alt="" src="/images/vector2.png" className="inline-block mr-[1%]"></img>
                                        <span>{props.sqft}sqft</span>
                                        <img alt="" src="/images/vector3.png" className="inline-block mr-[1%] ml-[1%]"></img>
                                        <span>{props.rooms}</span>
                                        <img alt="" src="/images/vector4.png" className="inline-block mr-[1%] ml-[1%] w-[15px] h-[15px]"></img>
                                        <span className='inline-block mr-[15px]'>{props.bath}</span>
                                        <span className='bg-[#e7e7e7] text-[orange] text-[18px] text-center px-[20px] py-[5px] rounded-[10px] font-[600]'>for rent</span>
                                        <p className='mt-[50px]'>
                                            {props.description}
                                        </p>
                                        <h1 className='text-black text-[30px]'>Facilities:</h1>
                                        <div className='mt-[50px] w-[80%] xsm:flex-col  lg:flex justify-between'>
                                            {props.facilities.map((item,id)=>{
                                                return (
                                                    <div key={id} className='bg-[#e7e7e7] text-[orange] text-[18px] text-center px-[20px] py-[5px] rounded-[10px] font-[600] mr-[15px] xsm:mb-[15px] md:mb-[10px] lg:mb-0'>{item}</div>
                                                )
                                            })}
                                        </div>
                                </div>
                            </div>
                        </div>
                </Modal.Body>
        </Modal>
    </div>
  )
}
export default RentalCard