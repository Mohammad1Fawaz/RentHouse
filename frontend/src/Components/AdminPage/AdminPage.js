import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AdminPage.css";
import { toast } from "react-toastify";
import {MdDeleteForever} from 'react-icons/md'
import {RxUpdate} from 'react-icons/rx'
import DeleteModal from "./DeleteModal";
import UpdateModal from "./updateModal";
const AdminPage = () => {
  const [houses, setHouses] = useState([]);
  const [facilities, setFacilities] = useState([]);
  const [price, setPrice] = useState("");
  const [sqft, setsqft] = useState("");
  const [frequency, setFrequency] = useState("daily");
  const [rooms, setRooms] = useState("1");
  const [bath, setBath] = useState("1");
  const [furnishedType, setFurnishedType] = useState("Furnished");
  const [propertyType, setPropertyType] = useState("Appartment");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [houseImage, setHouseImage] = useState(null);
  const [interiorImages, setInteriorImages] = useState([]);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUpdateModal, setshowUpdateModal] = useState(false);
  const [selectedHouseId, setSelectedHouseId] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedName, setSelectedName] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedSqft, setSelectedSqft] = useState("");
  const [selectedRooms, setSelectedRooms] = useState("");
  const [selectedFrequency, setSelectedFrequency] = useState("");
  const [selectedBath, setSelectedBath] = useState("");
  const [selectedDescription, setSelectedDescription] = useState("");
  const [selectedFacilities, setSelectedFacilities] = useState([]);
  const [selectedPropertyType,setSelectedPropertyType] = useState("");
  const [selectedFurnishedType, setSelectedFurnishedType] = useState("Furnished");

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
  const handleSubmit = async (e) => {
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

    await axios
      .post("http://localhost:8000/saveHouse", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      })
      .then((res) => {
        toast.success(res.data.message);
        setPrice("");
        setBath("*");
        setRooms("*");
        setDescription("");
        setsqft("");
        setFrequency();
        setFurnishedType("Furnished");
        setHouseImage(null);
        setInteriorImages([]);
        setName("");
        setPropertyType("Appartment");
        setFrequency("all");
      })
      .catch((error) => {
        console.error(error);
        // Handle error, e.g., show an error message
      });
  };
  useEffect(() => {
    const fetchHouses = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8000/getHouses",
          {}
        );
        setHouses(response.data.houses);
        // console.log(houses);
      } catch (error) {
        console.error(error);
      }
    };

    fetchHouses();
  }, []);


  const handleDelete = (houseId) => {
    setSelectedHouseId(houseId);
    setShowDeleteModal(true);
  };

  const handleUpdate = (houseId,name,src,description,rooms,price,sqft,frequency,bath,facilities,propertyType,furnishedType,houseImage,imagesArray)=>{
    setSelectedHouseId(houseId);
    setSelectedImage(src);
    setSelectedName(name);
    setSelectedPrice(price);
    setSelectedSqft(sqft);
    setSelectedBath(bath);
    setSelectedDescription(description);
    setSelectedFrequency(frequency);
    setSelectedRooms(rooms);
    setSelectedFacilities(facilities);
    setSelectedPropertyType(propertyType)
    setSelectedFurnishedType(furnishedType)
    setHouseImage(houseImage);
    setInteriorImages(imagesArray)
    setshowUpdateModal(true);
  }



  return (
    <div className="mt-8 flex justify-center gap-24 border shadow mx-auto rounded-md px-4 xsm:w-[100%] flex-col lg:flex-row w-[95%] h-[135vh] xl:h-[100vh] xl:w-[75%]">
      <div className="h-[70vh] p-2 overflow-y-scroll xsm:w-full sm:w-full xl:h-full xl:w-[40%]">
        {houses.map((house) => {
          return (
            <div key={house._id}>
              <div className="flex justify-between items-center mt-2 mb-2 border-[1px] border-orange-400 rounded-sm p-4">
                <div className="">
                  <h6 className="text-xs text-gray-500 sm:text-base">{house.name}</h6>
                  <h6 className="text-orange-400 sm:text-base">{house.price}$</h6>
                </div>
                <img
                  alt=""
                  src={`http://localhost:8000/${house.src}`}
                  className="xsm:w-14 xsm:h-14 sm:w-16 sm:h-16 xl:w-14 h-14"
                ></img>
                <div className="flex flex-col gap-4 items-center">
                  <span onClick={()=>{handleUpdate(house._id,house.name,house.src,house.description,house.rooms,house.price,house.sqft,house.frequency,house.bath,house.facilities,house.propertyType,house.furnishedType,house.src,house.imagesArray)}} className="w-6 h-6 rounded-full border-[1px] flex justify-center items-center cursor-pointer text-2xl hover:bg-white hover:text-orange-400 hover:border-orange-400">
                    <RxUpdate className="text-gray-500"/>
                  </span>
                  <span onClick={()=>{handleDelete(house._id)}} className="w-6 h-6 rounded-full border-[1px] flex justify-center items-center cursor-pointer text-2xl hover:bg-white hover:text-orange-400 hover:border-orange-400">
                    <MdDeleteForever className="text-gray-500"/>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
          {showDeleteModal && (
            <DeleteModal
              houseId={selectedHouseId}
              onClose={() => setShowDeleteModal(false)} 
            />
          )}
          {showUpdateModal && (
            <UpdateModal
            houseId={selectedHouseId}
            image={selectedImage}
            name={selectedName}
            rooms={selectedRooms}
            bath={selectedBath}
            frequency={selectedFrequency}
            description={selectedDescription}
            price={selectedPrice}
            sqft={selectedSqft}
            facilities={selectedFacilities}
            propertyType={selectedPropertyType}
            furnishedType={selectedFurnishedType}
            houseImage={houseImage}
            interiorImages={interiorImages}
            onClose={() => setshowUpdateModal(false)} 
            />
          )}
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex gap-x-8 gap-y-1 flex-wrap items-center h-full xsm:w-[100%]  p-2 lg:w-[40%]"
        encType="multipart/form-data"
      >
        <div className="flex justify-between">
          <h6 className="self-center text-gray-700 text-xs md:text-sm lg:text-base">
            Rent Frequency:
          </h6>
          <select
            className="w-fit md:p-1 m-2 rounded-sm font-normal bg-gray-200 transition ease-in-out text-gray-700 hover:bg-white text-xs md:text-sm lg:text-base my-2 outline-none"
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
            name="frequency"
            required
          >
            <option value="daily">daily</option>
            <option value="weekly">weekly</option>
            <option value="monthly">monthly</option>
            <option value="yearly">yearly</option>
          </select>
        </div>

        <div className="flex">
          <h6 className="self-center text-gray-700 text-xs md:text-sm lg:text-base">Room:</h6>
          <select
            className="w-fit md:p-1 m-2 rounded-sm font-normal bg-gray-200 transition ease-in-out text-gray-700 hover:bg-white text-xs md:text-sm lg:text-base my-2 outline-none"
            value={rooms}
            onChange={(e) => setRooms(e.target.value)}
            name="rooms"
            required
          >
            <option>1</option>
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
          <h6 className="self-center text-gray-700 text-xs md:text-sm lg:text-base">Bath:</h6>
          <select
            className="w-fit md:p-1 m-2 rounded-sm font-normal bg-gray-200 transition ease-in-out text-gray-700 hover:bg-white text-xs md:text-sm lg:text-base my-2 outline-none"
            value={bath}
            onChange={(e) => setBath(e.target.value)}
            name="bath"
            required
          >
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
          <h6 className="self-center text-gray-700 text-xs md:text-sm lg:text-base">
            Furnished type:
          </h6>
          <select
            className="w-fit md:p-1 m-2 rounded-sm font-normal bg-gray-200 transition ease-in-out text-gray-700 hover:bg-white text-xs md:text-sm lg:text-base my-2 outline-none"
            value={furnishedType}
            onChange={(e) => setFurnishedType(e.target.value)}
            name="furnishedType"
            required
          >
            <option>Furnished</option>
            <option>unFurnished</option>
          </select>
        </div>

        <div className="flex">
          <h6 className="self-center text-gray-700 text-xs md:text-sm lg:text-base">
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
              required
            />
            <span>850000</span>
            <span className="text-orange-400 inline-block ml-6">{price}$</span>
          </div>
        </div>
        <div className="flex">
          <h6 className="self-center text-gray-700 text-xs md:text-sm lg:text-base">
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
              required
            />
            <span>20000</span>
            <span className="text-orange-400 inline-block ml-6">{sqft}</span>
          </div>
        </div>

        <div className="flex">
          <h6 className="self-center text-gray-700 text-xs md:text-sm lg:text-base">
            Property type:
          </h6>
          <select
            className="w-fit md:p-1 m-2 rounded-sm font-normal bg-gray-200 transition ease-in-out text-gray-700 hover:bg-white text-xs md:text-sm lg:text-base my-2 outline-none"
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            name="propertyType"
            required
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
          <h6 className="text-sm  text-gray-700 md:text-md lg:text-lg">
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
            className="p-2 text-gray-700 border-[1px] outline-none shadow rounded-md w-full focus:border-orange-400"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
            required
          />
        </div>
        <div className="mb-[5%] w-full">
          <textarea
            placeholder="Desciption"
            className="border-[1px] text-gray-700 outline-none shadow rounded-md max-h-32 min-h-[8rem] p-2 w-full focus:border-orange-400"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            name="description"
            required
          />
        </div>
        <div className="flex items-center gap-2">
          <label
            htmlFor="fileInput"
            className="bg-white text-gray-700 rounded-md border p-2 text-center xsm:text-xs flex justify-center"
          >
            House Image
          </label>
          <input
            type="file"
            id="fileInput"
            className="border shadow-sm rounded-sm xsm:text-xs flex justify-center"
            onChange={handleHouseImageChange}
            name="houseImage"
            required
          />
        </div>
        <div className="flex items-center gap-2">
          <label
            htmlFor="interiorInput"
            className="bg-white text-gray-700 rounded-md border p-2 text-center xsm:text-xs lg:text-sm"
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
            required
          />
        </div>
        <button className="xsm:mb-8 lg:mb-0 border-[1px] rounded-lg  w-full p-2 border-orange-400 text-lg text-white bg-orange-400 hover:bg-white hover:!text-orange-400">
          Save House
        </button>
      </form>
    </div>
  );
};

export default AdminPage;
