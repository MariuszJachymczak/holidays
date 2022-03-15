import axios from "axios";


export async function getHolidays(country, year) {
    const result = await axios.get(`https://free-universal-holidays.p.rapidapi.com/holidays/holidays?country=${country}&year=${year}`,
        {
            headers: {
                'x-rapidapi-host': 'free-universal-holidays.p.rapidapi.com',
                'x-rapidapi-key': 'db2eaa129emsh6b816980704f09ap1e2f94jsnbf157dfa1299'
              },
              
        }
    )
   
   
    return result
} 

// export async function getHolidays(country, year){
//     const options = {
//         method: 'GET',
//         url: 'https://free-universal-holidays.p.rapidapi.com/holidays/holidays',
//         params: {country: `${country}`, year: `${year}`},
//         headers: {
//           'x-rapidapi-host': 'free-universal-holidays.p.rapidapi.com',
//           'x-rapidapi-key': 'db2eaa129emsh6b816980704f09ap1e2f94jsnbf157dfa1299'
//         }
//       };
      
//       axios.request(options).then(function (response) {
//           console.log(response.data, "res");
//       }).catch(function (error) {
//           console.error(error);
//       });
// }