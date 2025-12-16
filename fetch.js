// Отримати список користувачів з GitHub API
//  Опис: Використайте публічне API GitHub для отримання списку 
// користувачів. Зробіть GET-запит за адресою https://api.github.com/users 
// та перегляньте отримані дані щодо користувачів.

const usersList = document.querySelector("#list")

fetch("https://api.github.com/users")
.then((response)=> {
    return response.json()
})
.then((data)=> {
    console.log(data);
    usersList.innerHTML = createMarkUp(data)
})

function createMarkUp(data) {
    const newUsers = data.map((user)=> 
        `<li>
            <h2>${user.login}</h2>
            <img src=${user.avatar_url} alt="user-profile">
            <p>User id: ${user.id}</p>
            <p>User is: ${user.type}</p>
        </li>`
    ).join('')
    return newUsers
}

// Отримати погоду за допомогою OpenWeatherMap API 
// Опис: Використайте публічне API OpenWeatherMap для отримання поточної
//  погоди. Зробіть GET-запит за адресою 
//  https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY},
//  де {city} - назва міста, а {API_KEY} - ваш ключ API OpenWeatherMap.
//   Перегляньте отримані дані щодо погоди.

const API_KEY = "1a36e070-daa5-11f0-9b8c-0242ac130003-1a36e11a-daa5-11f0-9b8c-0242ac130003"
const city = "London"
fetch(`http://api.openweathermap.org/data/2.5/weather?q=London&APPID=80aa3ba43dd8ad9e1d22c532347905e9`)
.then(res => {return res.json()})
.then(res => console.log(res))
.catch(err => console.log(err))

