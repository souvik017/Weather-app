const pg_body = document.querySelector('.body');
const inputBox = document.querySelector('.search_box');
const searchBtn = document.getElementById('search_in');
let weather_img = document.querySelector('.weather_img');
const temperature = document.querySelector('.temperature');
const  description = document.querySelector('.description');
const  humidity= document.getElementById('humidity');
const wind_speed = document.getElementById('wind_speed');

const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather_body');


async function checkWeather(city){
    const api_key = 'fa545195d067374238e0448e0533cade';
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;


//     function runcheck(){
//         if(inputBox.value ==""){
//             location_not_found.style.display = "flex";
//             weather_body.style.display = "none";
//             return;
//     }
// }


    const weather_data= await fetch(`${url}`).then(Response=>Response.json());
   
    // console.log(weather_data);
    if(weather_data.cod === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }

    if(weather_data.cod === `400`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }
   
 

    // console.log("run");
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";


    temperature.innerHTML=`${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML=`${weather_data.weather[0].main}`;
    humidity.innerHTML=`${weather_data.main.humidity}%`;
    wind_speed.innerHTML=`${weather_data.wind.speed}km/h`;
    
    switch(weather_data.weather[0].main){
      case "Clouds":
          weather_img.src = "./assetss/cloud.png";
          pg_body.style.backgroundImage ="url('./assetss/clouds1.jpg')";
          pg_body.style.backgroundSize= "cover";
          break;
      case "Clear":
          weather_img.src = "./assetss/clear.png";
          pg_body.style.backgroundImage ="url('./assetss/clear1.jpg')";  
          pg_body.style.backgroundSize= "cover"; 
          break;
      case "Rain":
          weather_img.src = "./assetss/rain.png";
          pg_body.style.backgroundImage ="url('./assetss/rain1.jpg')";
          pg_body.style.backgroundSize= "cover";
          break;
      case "Mist":
          weather_img.src = "./assetss/mist.png";
          pg_body.style.backgroundImage ="url('./assetss/mist1.jpg')";
          pg_body.style.backgroundSize= "cover";
          break;
      case "Snow":
          weather_img.src = "./assetss/snow.png";
          pg_body.style.backgroundImage ="url('./assetss/snow1.jpg')";
          pg_body.style.backgroundSize= "cover";
          break;
      case "Haze":
        weather_img.src = "./assetss/cloud.png";
        pg_body.style.backgroundImage ="url('./assetss/haze1.jpg')";
        pg_body.style.backgroundSize= "cover";

  }


    console.log(weather_data);
};


searchBtn.addEventListener('click', ()=>{
   checkWeather(inputBox.value);
});