(async function () {
  const URL =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
  const API_KEY = "7W5W9KNW3ZF8EYXKZHNH3S29L";
  const PLACE = "greenbay";

  async function getWeatherData(place, key) {
    const response = await fetch(URL + `${place}/?key=${key}`, {
      mode: "cors",
    });
    const json = await response.json();
    console.log(json);
  }

  // getWeatherData(PLACE, API_KEY);
})();
