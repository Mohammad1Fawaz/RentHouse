import {Container} from "react-bootstrap"
import Aos from "aos"
import 'aos/dist/aos.css'
import './Discover.css'
import { useEffect } from "react"
import { Link } from "react-router-dom"
const Discover=()=>{
    useEffect(() => {
        Aos.init({duration:1000})
    }, [])
    return(
        <Container className="mt-[10%]" id="Discover">
            <div className=" flex xsm:flex-col sm:flex-col lg:flex-row justify-between">
                <div data-aos='fade-right' className="xsm:w-[100%] mb-[5%] lg:w-[40%]">
                    <h1 className="text-[35px] text-[#474646] font-bold">Discover Your Perfect Home Today</h1>
                    <p className="text-[20px] mt-[5%] text-[#666565]">Welcome to your source for leasing and managing beautiful rental homes Indonesia</p>
                    <Link to='SearchRentals'>
                        <button className="button capitalize bg-[orange] text-white p-[2%] text-[20px] mt-[5%] xsm:w-[60%] lg:w-[50%] xl:w-[35%]">discover now</button>
                    </Link>
                </div>
                <div className="flex justify-between  w-[100%] lg:w-[60%]" data-aos='fade-up'>
                    <img alt="" src="/images/Rectangle1.png" className="w-[32%]"></img>
                    <img alt="" src="/images/Rectangle2.png" className="w-[32%]"></img>
                    <img alt="" src="/images/Rectangle3.png" className="w-[32%]"></img>
                </div>
            </div>
        </Container>
    )
}

export default Discover