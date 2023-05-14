import '../Components/Search Rentals/SearchRental.css'
import { Container } from "react-bootstrap";
import { fetchHouses} from "../Components/Data";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import RentalCard from "../Components/Search Rentals/RentalCard";


const SearchRental = () => {
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

  const[Frequency,setFrequency]=useState('all');
  const[minPrice,setprice]=useState('10000');
  const [maxPrice,setmaxPrice]=useState('50000');
  const [sqft,setsqft]=useState('1000');
  const [rooms,setrooms]=useState('*');
  const [bath,setbath]=useState('*');
  const [furnished,setfurnished]=useState('Furnished');
  const [available,setavailable]=useState(false);
  const[sort,setSort]=useState('Default');
  const [propertyType,setPropertyType] = useState("Appartment");
  const [filterProducts,setFilterProducts] = useState(Houses);
  useEffect(()=>{
      if(Frequency!=='all' || minPrice!=='10000' || maxPrice!=='50000' || sqft!=='1000' || rooms!=='*' || bath!=='*' || furnished!=='Furnished' || sort!=="Default" || propertyType!=="Appartment"){
          const filterarray=Houses.filter((item)=>{
              if(Frequency==='all'){
                  if(rooms==='*'){
                    if(bath==='*'){
                      return (
                        item.price>=minPrice&&
                        item.price>=maxPrice&&
                        item.sqft>=sqft&&
                        item.furnishedType?.toLowerCase()===furnished.toLowerCase()&&
                        item.propertyType?.toLowerCase()===propertyType.toLowerCase()
                      )
                    }else{
                      return (
                        item.price>=minPrice&&
                        item.price>=maxPrice&&
                        item.sqft>=sqft&&
                        item.bath?.toString()===bath&&
                        item.furnishedType?.toLowerCase()===furnished.toLowerCase()&&
                        item.propertyType?.toLowerCase()===propertyType.toLowerCase()
                      )
                    }
                  }else{
                    if(bath==='*'){
                      return (
                        item.price>=minPrice&&
                        item.price>=maxPrice&&
                        item.sqft>=sqft&&
                        item.rooms?.toString()===rooms&&
                        item.furnishedType?.toLowerCase()===furnished.toLowerCase()&&
                        item.propertyType?.toLowerCase()===propertyType.toLowerCase()
                      )
                    }else{
                      return (
                        item.price>=minPrice&&
                        item.price>=maxPrice&&
                        item.sqft>=sqft&&
                        item.rooms?.toString()===rooms&&
                        item.bath?.toString()===bath&&
                        item.furnishedType?.toLowerCase()===furnished.toLowerCase()&&
                        item.propertyType?.toLowerCase()===propertyType.toLowerCase()
                      )
                    }
                  }
              }else{
                  if(rooms==='*'){
                    if(bath==='*'){
                      return (
                        item.frequency?.toLowerCase()===Frequency.toLowerCase()&&
                        item.price.toString()>=minPrice&&
                        item.price.toString()>=maxPrice&&
                        item.sqft.toString()>=sqft&&
                        item.furnishedType?.toLowerCase()===furnished.toLowerCase()&&
                        item.propertyType?.toLowerCase()===propertyType.toLowerCase()
                      )
                    }else{
                      return (
                        item.frequency?.toLowerCase()===Frequency.toLowerCase()&&
                        item.price.toString()>=minPrice&&
                        item.price.toString()>=maxPrice&&
                        item.sqft.toString()>=sqft&&
                        item.bath?.toString()===bath&&
                        item.furnishedType?.toLowerCase()===furnished.toLowerCase()&&
                        item.propertyType?.toLowerCase()===propertyType.toLowerCase()
                      )
                    }
                  }else{
                    if(bath==='*'){
                      return (
                        item.frequency?.toLowerCase()===Frequency.toLowerCase()&&
                        item.price.toString()>=minPrice&&
                        item.price.toString()>=maxPrice&&
                        item.sqft.toString()>=sqft&&
                        item.rooms.toString()===rooms &&
                        item.furnishedType.toLowerCase()===furnished.toLowerCase()&&
                        item.propertyType?.toLowerCase()===propertyType.toLowerCase()
                      )
                    }else{
                      return (
                        item.frequency?.toLowerCase()===Frequency.toLowerCase()&&
                        item.price.toString()>=minPrice&&
                        item.price.toString()>=maxPrice&&
                        item.sqft.toString()>=sqft&&
                        item.rooms.toString()===rooms&&
                        item.bath.toString()===bath&&
                        item.furnishedType?.toLowerCase()===furnished.toLowerCase()&&
                        item.propertyType?.toLowerCase()===propertyType.toLowerCase()
                      )
                    }
                  }
              }    
              });
              if(sort!=='Default'){
                console.log(sort.toLowerCase())
                if(sort.toLowerCase()==='lowest price'){
                   const sorted=filterarray.sort((a,b)=>{return a.price-b.price})
                   setFilterProducts(sorted)
                }else if(sort.toLowerCase()==='highest price'){
                  const sorted=filterarray.sort((a,b)=>{return a.price>b.price ? -1:1})
                  setFilterProducts(sorted)
                }
              }
              else{
                setFilterProducts(filterarray)
              }
              if(filterarray.length===0){
                setavailable(true)
              }
              else{
                setavailable(false)
              }
      }else{
        setavailable(false)
        if(sort!=='Default'){
          if(sort.toLowerCase()==='lowest price'){
             const sorted=Houses.sort((a,b)=>{return a.price-b.price})
             setFilterProducts(sorted)
          }else if(sort.toLowerCase()==='highest price'){
            const sorted=Houses.sort((a,b)=>{return a.price>b.price ? -1:1})
            setFilterProducts(sorted)
          }
        }else{
          setFilterProducts(Houses)
        }
        setFilterProducts(Houses)
      }
  },[Frequency,minPrice,maxPrice,sqft,rooms,bath,furnished,sort,Houses,propertyType]);




  return (
    <div className="">
      <Container
        data-aos="zoom-in"
        data-aos-duration="2000"
        className="animate-gradient flex rounded-xl mt-5 mb-5   p-4 items-center justify-center xsm:flex-col  md:flex-row flex-wrap "
      >
        <div className="flex justify-between">
          <h6 className="self-center text-white text-xs md:text-sm lg:text-base">
            Rent Frequency :
          </h6>
          <select
            onChange={(e)=>setFrequency(e.target.value)}
            className="w-fit md:p-1 m-2 rounded-sm font-normal bg-gray-200 transition ease-in-out text-gray-700 hover:bg-white text-xs md:text-sm lg:text-base my-2 outline-none"
          >
            {/* {Frequencies.map((item,id)=>{
              return <option key={id} value={item.Frequency}>{item.Frequency}</option>
            })} */}
            <option value='all' name="all">all</option>
            <option value='daily' name="daily">daily</option>
            <option value='weekly' name="yearly">weekly</option>
            <option value='monthly' name="monthly">monthly</option>
            <option value='yearly' name="yearly">yearly</option>
          </select>
        </div>
        <div className="flex">
          <h6 className="self-center text-white text-xs md:text-sm lg:text-base">
            Min Price :
          </h6>
          <div className="flex  items-center mx-1 my-2 md:my-0 text-gray-300 text-xs md:text-sm lg:text-base hover:outline-none">
            <span>10000</span>
            <input
              onChange={(e)=>setprice(e.target.value)}
              type="range"
              min="10000"
              max="85000"
              step="1000"
            ></input>
            <span>85000</span>
          </div>
        </div>

        <div className="flex">
          <h6 className="self-center text-white text-xs md:text-sm lg:text-base">
            Max Price :
          </h6>
          <div className="flex  items-center mx-1 my-2 md:my-0 text-gray-300 text-xs md:text-sm lg:text-base hover:outline-none">
            <span>50000</span>
            <input
              onChange={(e)=>setmaxPrice(e.target.value)}
              type="range"
              min="50000"
              max="1000000"
              step="10000"
            ></input>
            <span>1000000</span>
          </div>
        </div>
        <div className="flex">
          <h6 className="self-center text-white text-xs md:text-sm lg:text-base">
            Sort :
          </h6>
          <select
          onChange={(e)=>setSort(e.target.value)}
            className="w-fit md:p-1 m-2 rounded-sm font-normal bg-gray-200 transition ease-in-out text-gray-700 hover:bg-white text-xs md:text-sm lg:text-base my-2 outline-none"
          >
            <option>Default</option>
            <option>Lowest Price</option>
            <option>Highest Price</option>
          </select>
        </div>

        <div className="flex">
          <h6 className="self-center text-white text-xs md:text-sm lg:text-base">
            Max area(sqft) :
          </h6>
          <div className="flex  items-center mx-1 my-2 md:my-0 text-gray-300 text-xs md:text-sm lg:text-base hover:outline-none">
            <span>1000</span>
            <input
              onChange={(e)=>setsqft(e.target.value)}
              type="range"
              min="1000"
              max="20000"
              step="1000"
            ></input>
            <span>20000</span>
          </div>
        </div>

        <div className="flex">
          <h6 className="self-center text-white text-xs md:text-sm lg:text-base">
            Room:
          </h6>
          <select
            onChange={(e)=>setrooms(e.target.value)}
            className="w-fit md:p-1 m-2 rounded-sm font-normal bg-gray-200 transition ease-in-out text-gray-700 hover:bg-white text-xs md:text-sm lg:text-base my-2 outline-none"
          >
            <option>*</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
          </select>
        </div>
        <div className="flex">
          <h6 className="self-center text-white text-xs md:text-sm lg:text-base">
            Bath:
          </h6>
          <select 
            onChange={(e)=>setbath(e.target.value)}
            className="w-fit md:p-1 m-2 rounded-sm font-normal bg-gray-200 transition ease-in-out text-gray-700 hover:bg-white text-xs md:text-sm lg:text-base my-2 outline-none"
          >
            <option>*</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
          </select>
        </div>
        <div className="flex">
          <h6 className="self-center text-white text-xs md:text-sm lg:text-base">
            Furnished type:
          </h6>
          <select
            onChange={(e)=>setfurnished(e.target.value)}
            className="w-fit md:p-1 m-2 rounded-sm font-normal bg-gray-200 transition ease-in-out text-gray-700 hover:bg-white text-xs md:text-sm lg:text-base my-2 outline-none"
           >
            <option>Furnished</option>
            <option>unFurnished</option>
          </select>
        </div>
        <div className="flex">
          <h6 className="self-center text-white text-xs md:text-sm lg:text-base">
            Property type:
          </h6>
          <select onChange={(e)=>setPropertyType(e.target.value)} className="w-fit md:p-1 m-2 rounded-sm font-normal bg-gray-200 transition ease-in-out text-gray-700 hover:bg-white text-xs md:text-sm lg:text-base my-2 outline-none">
            <option>Appartment</option>
            <option>TownHouses</option>
            <option>Villas</option>
            <option>PentHouses</option>
            <option>Hotel Appartments</option>
            <option>Villa Compound</option>
          </select>
        </div>
      </Container>
        {available && <div className="text-[orange] text-[50px] text-center w-[100%] mr-auto ml-auto uppercase">not available</div>}
      <Container className="flex flex-wrap xsm:justify-center md:justify-around">
        {filterProducts?.map((item, id) => {
          return (
            <RentalCard
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
          );
        })}
      </Container>
    </div>
  );
};

export default SearchRental;
