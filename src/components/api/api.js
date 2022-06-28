import { useEffect, useState } from "react"
import axios from 'axios'


let AllCakes = () => {

    const [cakes, setCakes] = useState(() => { loadCakedata(); });

    const options = {
        method: 'GET',
        url: 'https://pizza-and-desserts.p.rapidapi.com/desserts',
        headers: {
            'X-RapidAPI-Key': '15c855a2c0mshb818787122bd732p1c1ab5jsn3b0b9c4f1e32',
            'X-RapidAPI-Host': 'pizza-and-desserts.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });




}




export default AllCakes;



// let Names = () => {

    //     const getcakes = {
//         method: 'GET',
//         url: 'https://pizza-and-desserts.p.rapidapi.com/desserts',
//         headers: {
//           'X-RapidAPI-Key': 'e8b7643978mshedc2292d22632acp101a39jsne0bb2e95673a'}
//       };

//     const getnames = async () => {
//         let data = await axios.get('https://pizza-and-desserts.p.rapidapi.com/desserts')
//         console.log(data)
//         .header('X-RapidAPI-Key', {e8b7643978mshedc2292d22632acp101a39jsne0bb2e95673a});
//         return data.status === 200 ? data.data : null
//     }

//     let loadnames = async () => {
//         let data = await getnames();
//         console.log(data);
//         // stripBasename(data.name)
//     }

//     const [name, setnames ] = useState(() => {loadnames(); });

//     return(
//         <div>
//             <h1>test</h1>
//         {typeof name === 'object' && name[0] ? name[0].name: 'false'}
//         </div>
//     )
// }


// export default Names;
