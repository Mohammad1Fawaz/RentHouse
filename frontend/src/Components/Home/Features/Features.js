import './Features.css'
import { Container } from "react-bootstrap"
import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect,useState } from "react"
import FeatureCard from'./FeatureCard'
import { Link } from 'react-router-dom'
import { fetchHouses } from '../../Data'


const Features=()=>{
    const [Houses, setHouses] = useState([]);

    useEffect(() => {
      Aos.init({ duration: 1000 });
      fetchHouses()
        .then((houses) => {
          setHouses(houses);
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);
    return(
        <Container className="mt-[10%]" id='FeaturedProperties'>
            <div className="" data-aos='flip-down'>
                <h1 className="capitalize text-center text-[#474646]">featured properties</h1>
            </div>
            <div className='flex gap-3 flex-wrap mt-[5%] justify-center lg:justify-between' data-aos='zoom-in'>
                {Houses?.filter((item,index)=>{return index<9}).map((item,id)=>{
                    return(
                        <FeatureCard             
                            name={item.name}
                            price={item.price}
                            rooms={item.rooms}
                            sqft={item.sqft}
                            src={`http://localhost:8000/${item.src}`}
                            bath={item.bath}
                            key={id}
                            imagesArray={item.imagesArray}
                            description={item.description}
                            facilities={item.facilities}
                            frequency={item.frequency}
                        />
                    )
                })}
            </div>
            <div className="flex justify-center items-center mt-[5%]" data-aos='zoom-in-up'>
                <Link to='SearchRentals' className='Featurebutton capitalize text-white bg-[orange] rounded-[3%] xsm:p-[3%] md:p-[1%]'>
                    <button className="">see more property</button>
                </Link>
            </div>
        </Container>
    )
}
export default Features