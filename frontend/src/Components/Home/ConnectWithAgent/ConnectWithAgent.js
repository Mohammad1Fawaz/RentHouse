import './ConnectWithAgent.css'
// import { Container } from "react-bootstrap"
import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect} from "react"
import { Link } from 'react-router-dom'

const ConnectWithAgent=()=>{
    useEffect(() => {
        Aos.init({duration:500})
    },[])
    return(
        <div id='Connect' className="bg-[#FB9224] flex justify-around p-[3%] mt-[10%] rounded-[10px] w-[90%] mr-auto ml-auto" data-aos='fade-down'>
            <div className="xsm:w-[40%] md:w-[45%] lg:w-[50%] xl:w-[60%]" data-aos='fade-right'>
                <h1 className="text-white font-bold xsm:text-[15px]">Get Connected with top agents near you and find your home</h1>
                <h4 className="text-white xsm:text-[10px]">Get in touch or create account. We are 24/7 available</h4>
            </div>
            <div className="flex justify-center items-center xsm:w-[40%] md:w-[35%] xl:w-[40%]" data-aos='fade-up'>
                <Link to='SearchRentals' className='agentbutton bg-white text-center rounded-[3%] text-black text-[15px] p-[5%] capitalize xsm:w-[100%] md:w-[70%] lg:w-[50%] '>
                    <button className="text-[20px] capitalize font-normal">find agent</button>
                </Link>
            </div>   
        </div>
    )
}
export default ConnectWithAgent