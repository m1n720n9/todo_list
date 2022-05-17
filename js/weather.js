const API_KEY="c1d85aa00d96bddc90dd22e3bc45760e";

function onGeoOk(position){
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    console.log("You live in", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherIconImg = document.querySelector('.weatherIcon');
            const weather = document.querySelector('#weather .weather')
            const city = document.querySelector('#weather .city')
            city.innerText = data.name;
            weather.innerText = `${Math.ceil(data.main.temp)}˚C`
            const weatherIcon = data.weather[0].icon;
            const weatherIconAdrs = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
            weatherIconImg.setAttribute('src', weatherIconAdrs);
        }); 
}
function onGeoError(){
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);