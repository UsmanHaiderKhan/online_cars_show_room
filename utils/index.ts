const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
  params: {model: 'corolla'},
  headers: {
    'X-RapidAPI-Key': '0ccd4575ccmshc38567ce5550450p118c87jsne444d5f7d800',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }
};

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }

export async function fetchCars() {
    try {
        const response = await axios.request(options);
        return response;
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}