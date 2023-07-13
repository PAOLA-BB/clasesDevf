const axios = require('axios');

axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian')
  .then(function ({ data }) {
    // handle success
    console.log(data.meals[0].idMeal);
    return axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${data.meals[0].idMeal}`);
})
.then(({data}) =>{
    console.log(data.meals[0].strMeal);
})
  .catch(function (error) {
    // handle error
    console.log(Object.keys(error), error.message);
  })
  .finally(function () {
    console.log("finalicé")
    // always executed
  });