import './Hero.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Select from './Selectdropdown'
import { useNavigate } from 'react-router-dom';
const Hero = () => {
    const navigate=useNavigate();
    const navigateSearchRentals=()=>{
        navigate('/SearchRentals');
    }
  return (
    <div>
        <Container className='xsm:h-[125vh] lg:h-[90vh]'>
            <Row xs={1} md={2} className='h-[100%]'>
                <Col lg={6} className='h-[100%]' >
                    <h1  className='capitalize text-[#474646] font-semibold xsm:text-[30px] xl:text-[50px]'>Need To Rent A House ?</h1>
                    <h6 className='text-[#666565] xsm:text-[15px] xl:text-[20px]'>We'll Help You Find Your Next Home.</h6>
                    <div className='HeroImage md:hidden h-[40vh]'></div>
                    <p className='mt-[5%] xsm:text-[18px] xl:text-[20px]'>For Current Rent Estimate, Please Provide The Following :</p>
                    <form method='post' action='/SearchRentals' className='mt-[5%]'>
                        <Row xs={2} className='flex'>
                            <Col xs={6} className='mb-[5%]'>
                                <label className='inline pl-[5%]  xsm:text-[15px] xl:text-[25px] font-[500]'> Address </label>
                                <img alt='' src='/images/Vector.png' className='inline p-[2%]'></img>
                                <Select value1='Beirut' value2='Saida' value3='Tyre' value4='Nabatieh' value5='Saksakieh' value6='Sarafand'/>
                            </Col>
                            <Col xs={6} className='mb-[5%]'>
                                <label className='inline pl-[5%] mr-[1%] xsm:text-[15px] xl:text-[25px] font-[500]'> unit </label>
                                <Select value1='1' value2='2' value3='3' value4='4' value5='5' value6='6'/>                            </Col>
                            <Col xs={6} className='mb-[5%]'>
                                <label className='inline pl-[5%] mr-[1%] xsm:text-[15px] xl:text-[25px] font-[500]'> propertyType </label>
                                <img alt='' src='/images/Vector1.png' className='inline ml-[2%]'></img>
                                <Select value1='Appartment' value2='Townhouses' value3='Villas' value4='PentHouses' value5='Hotel Appartments' value6='Villa Compound'/>
                            </Col>
                            <Col xs={6} className='mb-[5%]'>
                                <label className='inline pl-[5%] mr-[1%] xsm:text-[15px] xl:text-[25px] font-[500]'> Bath </label>
                                <img alt='' src='/images/Vector4.png' className='inline w-[15px] h-[15px] ml-[2%]'></img>
                                <Select  value1='1' value2='2' value3='3' value4='4' value5='5' value6='6'/>
                            </Col>
                            <Col xs={6} className='mb-[5%]'>
                                <label className='inline pl-[5%] mr-[1%] xsm:text-[15px] xl:text-[25px] font-[500]'> sqft </label>
                                <img alt='' src='/images/Vector2.png' className='inline ml-[2%]'></img>
                                <Select  value1='1000' value2='2000' value3='3000' value4='4000' value5='5000' value6='6000'/>
                            </Col>
                            <Col xs={6} className='mb-[5%]'>
                                <label className='inline pl-[5%] mr-[1%] xsm:text-[15px] xl:text-[25px] font-[500]'> Beds </label>
                                <img alt='' src='/images/Vector3.png' className='inline ml-[2%]'></img>
                                <Select value1='1' value2='2' value3='3' value4='4' value5='5' value6='6'/>
                            </Col>
                            <Col xs={12} className='flex justify-center'>
                                <input onClick={navigateSearchRentals} type='submit' value='submit' className='Herosubmit mt-[4%] border-[2px] border-[orange] p-[3%] text-[20px] capitalize font-bold text-[orange] w-[90%] lg:w-[50%]'/>
                            </Col>
                        </Row>
                    </form>
                </Col>
                <Col lg={6} className='HeroImage'></Col>
            </Row>
        </Container>
    </div>
  )
}

export default Hero