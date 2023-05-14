// import axios from 'axios';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {TiWarning} from 'react-icons/ti'
import {AiFillCloseCircle} from 'react-icons/ai'
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import {find} from 'lodash'
import axios from 'axios';
const  UpdateModal = (props)=> {

    const [facilities, setFacilities] = useState([]);
    const [price, setPrice] = useState("");
    const [sqft, setsqft] = useState("");
    const [frequency, setFrequency] = useState("all");
    const [rooms, setRooms] = useState("*");
    const [bath, setBath] = useState("*");
    const [furnishedType, setFurnishedType] = useState("Furnished");
    const [propertyType, setPropertyType] = useState("Appartment");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [houseImage, setHouseImage] = useState(null);
    const [interiorImages, setInteriorImages] = useState([]);
    const setValues = ()=>{
      setFacilities(props.facilities);
      setPrice(props.price);
      setsqft(props.sqft);
      setFrequency(props.frequency);
      setRooms(props.rooms);
      setBath(props.bath);
      setFurnishedType(props.furnishedType);
      setPropertyType(props.propertyType);
      setName(props.name);
      setDescription(props.description);
      setHouseImage(props.houseImage);
      setInteriorImages(props.interiorImages)
    };
    
    useEffect(()=>{
      setValues();
    },[])
    const handleHouseImageChange = (e) => {
      const file = e.target.files[0];
      setHouseImage(file);
    };
  
    const handleInteriorImagesChange = (e) => {
      setInteriorImages(Array.from(e.target.files));
    };
  
    const handleFacilitiesChange = (e) => {
      const { value, checked } = e.target;
  
      // Update the facilities array based on the checkbox selection
      if (checked) {
        setFacilities((prevFacilities) => [...prevFacilities, value]);
      } else {
        setFacilities((prevFacilities) =>
          prevFacilities.filter((facility) => facility !== value)
        );
      }
    };
    const handleUpdate = async (e) => {
      e.preventDefault();
  
      // Create form data object
      const formData = new FormData();
      formData.append("price", price);
      formData.append("sqft", sqft);
      formData.append("frequency", frequency);
      formData.append("rooms", rooms);
      formData.append("bath", bath);
      formData.append("furnishedType", furnishedType);
      formData.append("propertyType", propertyType);
      formData.append("name", name);
      formData.append("description", description);
      formData.append("houseImage", houseImage);
      formData.append("facilities",JSON.stringify(facilities));
  
      interiorImages.forEach((image) => {
        formData.append("interiorImages", image);
      });
  
      const response = await axios
        .put(`http://localhost:8000/updateHouse/${props.houseId}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        })
        if(response.data.success){
          console.log(response.data.success)
            toast.success(response.data.message);
          }else{
            toast.error(response.data.message);
            console.log(response.data.success)
          }
    };


  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'center'}}
    >
      <Modal.Dialog>
        <Modal.Header className='relative'>
        <AiFillCloseCircle onClick={()=>{props.onClose()}} className='absolute top-4 right-2 w-8 h-8 cursor-pointer text-orange-400'/>
          <Modal.Title className='flex flex-col'>
            <div className='flex items-center gap-x-2'>
                Update House
                <TiWarning className='inline-block w-8 h-8 text-center ml-2 text-red-600'/>
            </div>
            <img alt='' src={`http://localhost:8000/${props.image}`}></img>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <form
        className="flex gap-x-8 gap-y-1 flex-wrap items-center w-[100%]  p-2 "
        encType="multipart/form-data"
        onSubmit={handleUpdate}
      >
        <div className="flex justify-between">
          <h6 className="self-center text-xs md:text-sm lg:text-base">
            Rent Frequency:
          </h6>
          <select
            className="w-fit md:p-1 m-2 rounded-sm font-normal bg-gray-200 transition ease-in-out text-gray-700 hover:bg-white text-xs md:text-sm lg:text-base my-2 outline-none"
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
            name="frequency"
          >
            <option value="all">all</option>
            <option value="daily">daily</option>
            <option value="weekly">weekly</option>
            <option value="monthly">monthly</option>
            <option value="yearly">yearly</option>
          </select>
        </div>

        <div className="flex">
          <h6 className="self-center text-xs md:text-sm lg:text-base">Room:</h6>
          <select
            className="w-fit md:p-1 m-2 rounded-sm font-normal bg-gray-200 transition ease-in-out text-gray-700 hover:bg-white text-xs md:text-sm lg:text-base my-2 outline-none"
            value={rooms}
            onChange={(e) => setRooms(e.target.value)}
            name="rooms"
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
          <h6 className="self-center text-xs md:text-sm lg:text-base">Bath:</h6>
          <select
            className="w-fit md:p-1 m-2 rounded-sm font-normal bg-gray-200 transition ease-in-out text-gray-700 hover:bg-white text-xs md:text-sm lg:text-base my-2 outline-none"
            value={bath}
            onChange={(e) => setBath(e.target.value)}
            name="bath"
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
          <h6 className="self-center text-xs md:text-sm lg:text-base">
            Furnished type:
          </h6>
          <select
            className="w-fit md:p-1 m-2 rounded-sm font-normal bg-gray-200 transition ease-in-out text-gray-700 hover:bg-white text-xs md:text-sm lg:text-base my-2 outline-none"
            value={furnishedType}
            onChange={(e) => setFurnishedType(e.target.value)}
            name="furnishedType"
            
          >
            <option>Furnished</option>
            <option>unFurnished</option>
          </select>
        </div>

        <div className="flex">
          <h6 className="self-center text-xs md:text-sm lg:text-base">
            Price :
          </h6>
          <div className="flex  items-center mx-1 my-2 md:my-0 text-gray-300 text-xs md:text-sm lg:text-base hover:outline-none">
            <span>10000</span>
            <input
              type="range"
              min="10000"
              max="850000"
              step="1000"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              name="price"
              
            />
            <span>850000</span>
          </div>
        </div>
        <div className="flex">
          <h6 className="self-center text-xs md:text-sm lg:text-base">
            sqft :
          </h6>
          <div className="flex  items-center mx-1 my-2 md:my-0 text-gray-300 text-xs md:text-sm lg:text-base hover:outline-none">
            <span>1000</span>
            <input
              type="range"
              min="1000"
              max="20000"
              step="1000"
              value={sqft}
              onChange={(e) => setsqft(e.target.value)}
              name="price"
              
            />
            <span>20000</span>
          </div>
        </div>

        <div className="flex">
          <h6 className="self-center text-xs md:text-sm lg:text-base">
            Property type:
          </h6>
          <select
            className="w-fit md:p-1 m-2 rounded-sm font-normal bg-gray-200 transition ease-in-out text-gray-700 hover:bg-white text-xs md:text-sm lg:text-base my-2 outline-none"
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            name="propertyType"
            
          >
            <option value="Appartment">Appartment</option>
            <option value="TownHouses">TownHouses</option>
            <option value="Villas">Villas</option>
            <option value="PentHouses">PentHouses</option>
            <option value="Hotel Appartments">Hotel Appartments</option>
            <option value="Villa Compound">Villa Compound</option>
          </select>
        </div>
        <div className="flex gap-x-1">
          <h6 className="text-sm md:text-md lg:text-lg">
            Facilities:
          </h6>
          <div className="flex flex-wrap gap-x-1">
            <div>
              <input
                type="checkbox"
                value="Parking Space"
                name="Parking Space"
                id="Parking Space"
                onChange={handleFacilitiesChange}
                checked ={find(facilities,(String)=>{
                    return String ==="Parking Space"
                })}         
              />
              <label htmlFor="Parking Space">Parking Space</label>
            </div>
            <div>
              <input
                type="checkbox"
                value="Balcony or Terrace"
                name="Balcony or Terrace"
                id="Balcony or Terrace"
                onChange={handleFacilitiesChange}
                checked ={find(facilities,(String)=>{
                    return String ==="Balcony or Terrace"
                })}
              />
              <label htmlFor="Balcony or Terrace">Balcony or Terrace</label>
            </div>
            <div>
              <input
                type="checkbox"
                value="Jacuzzi"
                name="Jacuzzi"
                id="Jacuzzi"
                onChange={handleFacilitiesChange}
                checked ={find(facilities,(String)=>{
                    return String ==="Jacuzzi"
                })}
              />
              <label htmlFor="Jacuzzi">Jacuzzi</label>
            </div>
            <div>
              <input
                type="checkbox"
                value="Pet Policy"
                name="Pet Policy"
                id="Pet Policy"
                onChange={handleFacilitiesChange}
                checked ={find(facilities,(String)=>{
                    return String ==="Pet Policy"
                })}
              />
              <label htmlFor="Pet Policy">Pet Policy</label>
            </div>
            <div>
              <input
                type="checkbox"
                value="Centrally Air-Conditioned"
                name="Centrally Air-Conditioned"
                id="Centrally Air-Conditioned"
                onChange={handleFacilitiesChange}
                checked ={find(facilities,(String)=>{
                    return String ==="Centrally Air-Conditioned"
                })}
              />
              <label htmlFor="Centrally Air-Conditioned">
                Centrally Air-Conditioned
              </label>
            </div>
          </div>
        </div>
        <div className=" w-full md:w-1/2">
          <input
            type="text"
            placeholder="Name"
            className="p-2 border-[1px] outline-none shadow rounded-md w-full hover:border-orange-400"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
            
          />
        </div>
        <div className="mb-[5%] w-full">
          <textarea
            placeholder="Desciption"
            className="border-[1px] outline-none shadow rounded-md max-h-32 min-h-[8rem] p-2 w-full focus:border-orange-400"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            name="description"
            
          />
        </div>
        <div className="flex items-center gap-2">
          <label
            htmlFor="fileInput"
            className="bg-white rounded-md border p-2 text-center xsm:text-xs flex justify-center"
          >
            House Image
          </label>
          <input
            type="file"
            id="fileInput"
            className="border shadow-sm rounded-sm xsm:text-xs flex justify-center"
            onChange={handleHouseImageChange}
            name="houseImage"
            
          />
        </div>
        <div className="flex items-center gap-2">
          <label
            htmlFor="interiorInput"
            className="bg-white rounded-md border p-2 text-center xsm:text-xs lg:text-sm"
          >
            Interior Images
          </label>
          <input
            type="file"
            id="interiorInput"
            className="border shadow-sm rounded-sm xsm:text-xs flex justify-center"
            onChange={handleInteriorImagesChange}
            multiple
            name="interiorImages" 
            
          />
        </div>
        <button className="xsm:mb-8 lg:mb-0 border-[1px] rounded-lg  w-full p-2 border-orange-400 text-lg text-white bg-orange-400 hover:bg-white hover:!text-orange-400">
          Save House
        </button>
      </form>
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
}

export default UpdateModal;