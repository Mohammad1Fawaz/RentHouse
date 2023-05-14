import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import './Navbar.css'
import React,{useState} from 'react'
import {GrUserAdmin} from 'react-icons/gr'
import AdminModal from './AdminModal';

const NavigationBar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false); 
  const [modalShow,setmodalShow] = useState(false)
  const handleOffcanvasClose = () => {
    setShowOffcanvas(false);
  };

  return (
    <div className='navigationBar'>
      {['lg'].map((expand) => (
        <Navbar key={expand}  expand={expand} className="mb-3 container !bg-white">
          <Container className='p-[1%]'>
            <Link onClick={handleOffcanvasClose} to='/'className='xsm:w-[30%] sm:w-[30%] md:w-[35%] lg:w-[15%] xl:w-[9%]'><img alt='' src='/images/Logo.png'></img></Link>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}` }onClick={()=>{setShowOffcanvas(true)}} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              show={showOffcanvas}
              onHide={handleOffcanvasClose}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <Link to='/'><img alt='' src='/images/Logo.png'></img></Link>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className=" justify-end flex-grow-1 pe-3 capitalize">
                  <NavDropdown
                    title="I'm a landlord"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    className='mr-[5%] navlinks'
                  >
                    {}
                    <div onClick={()=>{setmodalShow(true);handleOffcanvasClose();}} className='dropdown-item cursor-pointer'><GrUserAdmin className='inline-block mr-[10px] w-[20px] h-[20px]'/>I'm the admin</div>
                  </NavDropdown>
                  <NavDropdown
                    title="i'm a tenant"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    className='mr-[5%] navlinks'
                  >
                    <a href="#About" className='dropdown-item' onClick={handleOffcanvasClose}>
                      <img alt='' src='/images/people.webp' className='inline-block mr-[10px] w-[20px] h-[20px]'></img>people section
                    </a>
                      <a href="#Connect" className='dropdown-item' onClick={handleOffcanvasClose}>
                      <img alt='' src='/images/connect.webp' className='inline-block mr-[10px] w-[20px] h-[20px]'></img> connect
                      </a>
                      <a href='#mainPart' className='dropdown-item' onClick={handleOffcanvasClose}>
                      <img alt='' src='/images/home.webp' className='inline-block mr-[10px] w-[20px] h-[20px]'></img>Main part
                    </a>
                    <a href='#Discover' className='dropdown-item' onClick={handleOffcanvasClose}>
                      <img alt='' src='/images/discover.webp' className='inline-block mr-[10px] w-[20px] h-[20px]'></img>Discover
                    </a>
                    <a href='#FeaturedProperties' className='dropdown-item' onClick={handleOffcanvasClose}>
                      <img alt='' src='/images/featuredProperties.webp' className='inline-block mr-[10px] w-[20px] h-[20px]'></img>Featured properties
                    </a>
                      <Link to='/SearchRentals' className='dropdown-item' onClick={handleOffcanvasClose}>
                      <img alt='' src='/images/search.webp' className='inline-block mr-[10px] w-[20px] h-[20px]'></img> search
                      </Link>
                    </NavDropdown>
                </Nav>
                <Link onClick={handleOffcanvasClose}  to='SearchRentals' className='navlinks text-[20px] mt-[10px] relative xsm:place-content-start md:mt-0  lg:place-content-center mr-[5%] grid' id='l'>
                     <span className='circleAnimation xsm:hidden  lg:absolute w-[15px] h-[15px] rounded-[50%] top-[10px] right-[-15px] bg-[white]'></span>
                      search rentals
                </Link>
                <Form className="d-flex xsm::w-[100%] md:w-[15%]">
                  <Link onClick={handleOffcanvasClose} to='/Contact' className='w-[100%]'><Button variant="outline-success" className='nav-button !border-[#fe8d1b] !w-[100%] !text-[orange] !text-[20px] xsm:mt-[25px] lg:mt-[0px]'>Contact us</Button></Link>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
          <AdminModal
            show={modalShow}
            onHide={() => setmodalShow(false)}
          />
        </Navbar>
      ))}
    </div>
  );
}

export default NavigationBar;
