import {Card} from "react-bootstrap"
import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react"
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,EffectFade,Pagination,Autoplay } from 'swiper';
import 'swiper/css';
import "swiper/css/effect-fade";
import "swiper/swiper-bundle.min.css";
import "swiper/css/pagination";
import 'swiper/css/autoplay';

const FeaturesCard=(props)=>{
    useEffect(() => {
        Aos.init({duration:1000})
    }, [])
    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
      }
      const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];
      const [fullscreen, setFullscreen] = useState(true);
      const [show, setShow] = useState(false);
    return(
        <div>
            <Card className="w-[100%] lg:w-[25rem] cursor-pointer" data-aos='fade-up' onClick={()=>{handleShow(values)}}>
                    <Card.Img variant="top" src={props.src}/>
                    <Card.Body>
                        <Card.Title>Songgoriti villa aduhai</Card.Title>
                            <div>
                                <h6><img alt="" src="/images/vector.png" className="inline-block mr-[2%]"></img>Lebanon, saksakieh</h6>
                                <span><br/><img alt="" src="/images/vector2.png" className="inline-block mr-[2%]"></img>{props.sqft}sqft</span>
                                <span><img alt="" src="/images/vector3.png" className="inline-block mr-[2%] ml-[2%]"></img>{props.rooms}</span>
                                <span><img alt="" src="/images/vector4.png" className="inline-block mr-[2%] ml-[2%] w-[15px] h-[15px]"></img>{props.bath}</span>
                                <br/>
                                <br/><span className="text-[orange] text-[30px] font-semibold">{props.price}$</span>
                            </div>   
                    </Card.Body>
            </Card>
                <Modal  dialogClassName="my-modal" show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                    <Modal.Header closeButton className='flex !justify-center'>
                        <div className='w-[100%]'>
                            <Modal.Title className="text-[orange] text-center !text-[30px]">{props.name}</Modal.Title>
                        </div> 
                    </Modal.Header>
                    <Modal.Body>
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
                                className="lg:h-[90vh] rounded-[50px]"
                                >
                                {props.imagesArray.map((item,id) => (
                                    <SwiperSlide className="" key={id}>
                                        <div className="">
                                            <img
                                            src={item.src}
                                            alt="image1"
                                            className="w-[100%]"
                                            ></img>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                                <div className='mt-[50px]'>
                                    <h5>{props.price} $/ yearly</h5>
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
                                                        <div key={id} className='bg-[#e7e7e7] text-[orange] text-[18px] text-center px-[20px] py-[5px] rounded-[10px] font-[600] mr-[15px] xsm:mb-[15px] md:mb-[10px] lg:mb-0'>{item.facility}</div>
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
export default FeaturesCard
