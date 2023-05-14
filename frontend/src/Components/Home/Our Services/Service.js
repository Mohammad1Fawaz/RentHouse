import { Link } from 'react-router-dom'
import  './OurServices.css'
const Service=(props)=>{
    return(
        <div className="mb-[10%] mt-[10%]">
            <div className="lg:hidden" data-aos='flip-left'><img alt="" src={props.src} className=""></img></div>
            <div className="flex justify-between bg-[#EEEEEE] relative rounded-[1%] w-[100%] h-[55vh] md:h-[70vh] lg:w-[80%] " data-aos='flip-left'>
                <div className="xsm:w-[100%] md:w-[70%] p-[5%] lg:p-[12%]">
                    <h1 className="uppercase">{props.title}</h1>
                    <h5>{props.subtitle}</h5>
                    <p>{props.paragraph}</p>
                    <Link to='SearchRentals'>
                        <button className="servicesbutton bg-[orange] p-[3%] w-[40%] text-white">learn more</button>
                    </Link>
                </div>
                <div className="hidden lg:inline-block absolute w-[55%] top-[-10%] right-[-30%]"><img alt="" src={props.src} className=""></img></div>
            </div>
        </div>
    )
}
export default Service