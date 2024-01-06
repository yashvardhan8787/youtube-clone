import axios from "axios";

const BASE_URL = 'https://youtube138.p.rapidapi.com';
const options = {
  
    params: {
      hl: 'en',
      gl: 'US'
    },
    headers: {
      'X-RapidAPI-Key':'5bd2a399a9mshfc68b51e9f11f8ep192dd0jsnb22ad4c4c80b',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };


  export const fetchDataFromApi = async (url)=>{

    const {data}= await axios.get(`${BASE_URL}/${url}`,options);
    return data;
  }