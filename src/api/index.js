import axios from 'axios';
const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'
const options = {
  
  url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary',
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
    
  },
  headers: {
    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
    'x-rapidapi-key': 'b371646fb9mshe34a37d022a7c59p1f1190jsn442942968108'
  }
};


 export const getPlacesData = async () => {
    try {
        //request to the api
        const {data : {data}} = await axios.get(URL,options);
        return data;
    }
    catch(error){
        console.log(error);
    }

}