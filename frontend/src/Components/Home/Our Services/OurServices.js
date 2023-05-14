import { Container } from "react-bootstrap"
import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react"
import Service from "./Service"

const ServicesArray=[
    {id:'1',src:'/images/Rectangle5.png', title:'rent-up services',subtitle:'We take the hassle out of finding your next tenant',paragraph:'Everything from marketing your property to moving in your tenant is all handled by our team. You set the requirements and we screen the tenants to find you the perfect match. No upfront fees.',},
    {id:'2',src:'/images/Rectangle6.png', title:'management service',subtitle:'Ready for a profitable property management service you can rely on?',paragraph:'Test drive our tech-driven, service focused property management service that delivers real clarity on your assets, and prioritizes your net profitability. Flat fee service without any hidden fees. Open 7 days a week.',}
]


const OurServices=()=>{
    useEffect(() => {
        Aos.init({duration:500})
    }, [])
    return(
        <Container className="mt-[10%]">
            <div className="" data-aos='flip-down'>
                <h1 className="capitalize text-center text-[#474646]">Our 2 Services</h1>
                <h4 className="text-center text-[#c3b8b8] uppercase">we keep it simple</h4>
            </div>
            {ServicesArray.map((item,id)=>{
                return <Service src={item.src} title={item.title} subtitle={item.subtitle} paragraph={item.paragraph} key={id}/>
            })}
        </Container>
    )
}

export default OurServices