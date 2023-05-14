const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const app = express();
const multer = require("multer");
const { upload } = require("./multer");
const path = require("path");
const Houses = require('./models/Houses')

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(cookieParser());
app.use(logger("tiny"));
app.use(
  cors({
    origin: ["http://localhost:3000","http://168.16.105:3000"],
    credentials: true,
  })
);
app.use(express.json());
app.use("/", express.static("uploads"));

const connectDatabase = require("./Database/db");

connectDatabase();

const user = require("./Routes/user");
app.use("/user", user);

if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "./config/.env",
  });
}

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.post(
  "/saveHouse",
  upload.fields([
    {
      name: "houseImage",
    },
    {
      name: "interiorImages",
    },
  ]),
  (req, res) => {
    const {
      price,
      frequency,
      rooms,
      bath,
      sqft,
      furnishedType,
      propertyType,
      name,
      description,
      facilities
    } = req.body;
    // const filename = req.file.originalname;
    // const fileurl = path.join(filename);
    const parsedFacilities = (JSON.parse(facilities));
    if (
      price &&
      frequency &&
      rooms &&
      bath &&
      sqft &&
      furnishedType &&
      propertyType &&
      name &&
      description&&
      parsedFacilities
    ) {
      Houses.create({
        src:req.files.houseImage[0].filename,
        price, 
        frequency,
        sqft,
        rooms, 
        bath,
        furnishedType,
        propertyType,
        name,
        description,
        imagesArray:req.files.interiorImages.map((object,index)=>{return {id:index,src:object.filename}}),
        facilities:parsedFacilities
      })
      res
        .status(200)
        .send({ success: true, message: "House saved successfully" });
    } else {
      res
        .status(401)
        .send({ success: true, message: "error in saving house !" });
    }
  }
);

app.post('/getHouses',async (req,res)=>{
  const houses =await Houses.find({});
  res.json({houses});
})

app.delete('/deleteHouse/:id',async(req,res)=>{

  const {id} = req.params;
  try {
    const house = await Houses.findByIdAndDelete(id);


    if (!house) {
      return res.status(404).send({success:false,message:'House not Found !'});
    }
    res.send({success:true,message:'House deleted successfully'});
  } catch (error) {

    res.status(500).send({success:false,message:"Error Deleting House !"});
  }

})



app.put("/updateHouse/:id",  upload.fields([
  {
    name: "houseImage",
  },
  {
    name: "interiorImages",
  },
]),async  (req, res) => {
  const { id } = req.params; 
  const { houseImage, interiorImages } = req.files;
  const {
    price,
    frequency,
    rooms,
    bath,
    sqft,
    furnishedType,
    propertyType,
    name,
    description,
    facilities} = req.body
   const house  = await Houses.findById(id);
   if(house){
    house.price = price;
    house.frequency = frequency;
    house.rooms = rooms;
    house.bath = bath;
    house.sqft = sqft;
    house.furnishedType = furnishedType;
    house.propertyType = propertyType;
    house.name = name;
    house.description = description;
    house.facilities = JSON.parse(facilities);
    if(houseImage)
      house.src = houseImage[0].filename;
    if(interiorImages)
      house.imagesArray = interiorImages?.map((object,index)=>{return {id:index,src:object.filename}});

  Houses.findById(id)
  .then((house) => {
    if (!house) {
      res.sendStatus(404); // House not found
    } else {
      // Update the house fields based on the received data
      house.price = price;
      house.frequency = frequency;
      house.rooms = rooms;
      house.bath = bath;
      house.sqft = sqft;
      house.furnishedType = furnishedType;
      house.propertyType = propertyType;
      house.name = name;
      house.description = description;
      house.facilities = JSON.parse(facilities);
      if(houseImage)
        house.src = houseImage[0].filename;
      if(interiorImages)
        house.imagesArray = interiorImages?.map((object,index)=>{return {id:index,src:object.filename}});

      return house.save();
    }
  })
  .then(() => {
    res.status(200).send({success:true,message:"House Updated successfully"}); // Send a success status code
  })
  .catch((error) => {
    console.error(error);
    res.status(500).send({success:false,message:"error in updating house !"}); // Internal server error
  });
}
});









const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
