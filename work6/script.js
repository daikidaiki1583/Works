const cityId =[2128295,1850147,1856057,1853908,1863967];
const test =document.getElementsByClassName(`city-0-we`);
let ID;

async function getWeather (ID) {

    try{
    let result = await fetch(`http://api.openweathermap.org/data/2.5/forecast?id=${ID}&units=metric&APPID=8e5c59756d7f69c5ab10af4c99564f41`)
    result = await result.json();
    console.log(result);
    console.log(result.list[0].weather[0].main);
    return result

    } catch {
        console.log(`error`);
    }
};

// const displayWeather = (data) => {
//      for (let i = 0;i < 7;i++ ) {

//         for (let int =0;int <= 30;int =+5) {
//             test[i].textContent = data.list[int].weather[0].main;
//         }
//     }
// };

for (let i=0;i < 5;i++) {
    getWeather(cityId[i])
    .then(result => {
        document.getElementById(`city-name${i}`).textContent = result.city.name;
        // displayWeather(result);
    })

}


// const weekWeatherDom = document.querySelectorAll(`.city-0-we`);



// const searchContry = () =>{
    
//     let contry;
//     while (contry !== `tokyo` ) {
//         data.forEach(cur =>{
//             contry = cur[0];
//         })
//     }    
//     console.log(contry);

// }


// async function getData () {
//     let data = await fetch('./weather/city.list.json')   
//     data = await data.json();
//     data =data.indexOf(1863967);
//     return data
// }
