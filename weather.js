(async function () {
  const URL =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
  const API_KEY = "7W5W9KNW3ZF8EYXKZHNH3S29L";
  const cityInput = document.getElementById("city");
  const submitBtn = document.querySelector(".city-input button");
  submitBtn.addEventListener("click", () => {
    if (cityInput.value) {
      let place = cityInput.value.toLowerCase().replace(" ", "");
      cityInput.value = "";
      getWeatherData(place, API_KEY);
    }
  });

  async function getWeatherData(place, key) {
    try {
      const response = await fetch(URL + `${place}/?key=${key}`, {
        mode: "cors",
      });
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  }

  function displayWeatherData(data) {}

  // getWeatherData(PLACE, API_KEY);
})();
