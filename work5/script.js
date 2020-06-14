
const second = () => {
    setTimeout(() => {
        console.log('second');
    },2000)
}

const first = () => {
    console.log('Hey there');
    second();
    console.log('the end');
}

first();

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))



// import axios from 'axios';
// import { key, proxy } from '../config';

// export default class Search {
//     constructor(query) {
//         this.query = query;
//     }

//     async getResults() {
//         try {
//             const res = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${this.query}`);
//             this.result = res.data.recipes;
//             // console.log(this.result);
//         } catch (error) {
//             alert(error);
//         }
//     }
// }
