import axios from "axios";
const URL = "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlacesData = async (sw, ne) => {
  try {
    //request to the api
    const {
      data: { data },
    } = await axios.get(URL , {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        tr_latitude: ne.lat,
      },
      headers: {
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        'x-rapidapi-key': 'b371646fb9mshe34a37d022a7c59p1f1190jsn442942968108',
        
      },
    });
    return data;
    
  } catch (error) {
    console.log(error);
  }
};
