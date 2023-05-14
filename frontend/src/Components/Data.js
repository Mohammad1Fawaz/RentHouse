import axios from "axios";

export const fetchHouses = async () => {
  try {
    const response = await axios.post("http://localhost:8000/getHouses", {});
    return response.data.houses;
  } catch (error) {
    console.error(error);
    throw error; 
  }
};


export const Houses = fetchHouses()
  .then(houses => {
    // console.log(productsArray);
    // Do something with the houses array
  })
  .catch(error => {
    console.error(error);
  });

  
