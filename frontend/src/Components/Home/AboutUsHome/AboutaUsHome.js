import { Col, Container, Row } from "react-bootstrap"
import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react"
const AboutUsHome=()=>{
    useEffect(() => {
        Aos.init({duration:500})
    },[])
    return(
        <Container className="mt-[10%]" id='About'>
            <Row xl={1} className='mb-[5%]' data-aos='zoom-in'>
                <Col className="text-center text-[30px] text-[#4F4F4F] font-bold">What People Say About Us</Col>
            </Row>
            <Row xs={1} xl={2} className='mt-[5%]'>
                <Col  data-aos='flip-left'><img alt="" src="/images/AboutUs.png"></img></Col>
                <Col xl={5} className="p-[5%] xl:ml-[5%]" data-aos='zoom-in-down'>
                    <h1 className="text-[#4F4F4F] font-bold mb-[2%]">Angelie Jolie</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <h6>Home seller, Malang</h6>
                </Col>
            </Row>
        </Container>
    )
}

export default AboutUsHome