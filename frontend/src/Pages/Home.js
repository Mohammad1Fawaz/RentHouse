import AboutUsHome from "../Components/Home/AboutUsHome/AboutaUsHome"
import ConnectWithAgent from "../Components/Home/ConnectWithAgent/ConnectWithAgent"
import Discover from "../Components/Home/Discover/Discover"
import Features from "../Components/Home/Features/Features"
import Hero from "../Components/Home/Hero/Hero"
import OurServices from "../Components/Home/Our Services/OurServices"

const Home=() =>{
    return(
        <div>
            <Hero/>
            <Discover/>
            <OurServices/>
            <Features/>
            <AboutUsHome/>
            <ConnectWithAgent/>
        </div>
    )
}
export default Home