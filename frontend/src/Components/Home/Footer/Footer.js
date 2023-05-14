import { Row,Col, Container } from 'react-bootstrap'
import './Footer.css'
const Footer=()=>{
    return(
        <div className="footer p-[3%]  xsm:mt-[8%] sm:mt-[5%] lg:p-[8%]">
            <Container>
            <Row xs={3} xl={4} className='flex lg:justify-between'>
                <Col xl={4} className='hidden lg:block'>
                    <img alt='' src='/images/Logo.png' className='w-[20%]'></img>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className='flex'>
                        <a href="http://www.facebook.com" className='cursor-pointer mr-[3%]'><img alt='' src='/images/facebook.png' className='w-[24px] h-[24px] cursor-pointer'></img></a>
                        <a href="http://www.instagram.com" className='cursor-pointer mr-[3%]'><img alt='' src='/images/instagram.png' className='w-[24px] h-[24px] cursor-pointer'></img></a>
                        <a href="http://www.twitter.com" className='cursor-pointer mr-[3%]'><img alt='' src='/images/twitter.png' className='w-[24px] h-[24px] cursor-pointer'></img></a>  
                    </div>
                </Col>
                <Col xl={2} xs={4}>
                    <div className='capitalize text-[#4F4F4F]'>
                        <h6>community</h6>
                        <span>for rent</span>
                        <span>for seller</span>
                        <span>for buyer</span>
                        <span>search home</span>
                    </div>
                </Col>
                <Col xl={2} xs={4}>
                    <div className='capitalize text-[#4F4F4F]'>
                        <h6>about</h6>
                        <span>our story</span>
                        <span>careers</span>
                        <span>meet the team</span>

                    </div>
                </Col>
                <Col xl={2} xs={4}>
                    <div className='capitalize text-[#4F4F4F]'>
                        <h6>contact</h6>
                        <span>Mohammad's club</span>
                        <span>simple text</span>
                        <span>Lebanon</span>
                        <span>saksakieh</span>
                    </div>
                </Col>
                <Col xl={4} xs={12} className='lg:hidden'>
                    <img alt='' src='/images/Logo.png' className='w-[50%]'></img>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className='flex'>
                        <a href="http://www.facebook.com" className='cursor-pointer mr-[3%]'><img alt='' src='/images/facebook.png' className='w-[24px] h-[24px] cursor-pointer'></img></a>
                        <a href="http://www.instagram.com" className='cursor-pointer mr-[3%]'><img alt='' src='/images/instagram.png' className='w-[24px] h-[24px] cursor-pointer'></img></a>
                        <a href="http://www.twitter.com" className='cursor-pointer mr-[3%]'><img alt='' src='/images/twitter.png' className='w-[24px] h-[24px] cursor-pointer'></img></a>     
                    </div>
                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default Footer