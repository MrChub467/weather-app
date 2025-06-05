(async function () {
  const URL =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
  const API_KEY = "7W5W9KNW3ZF8EYXKZHNH3S29L";
  const cityInput = document.getElementById("city");
  const submitBtn = document.querySelector(".city-input button");
  const weatherScreen = document.querySelector(".weather-info");

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
      displayWeatherData(json.days);
    } catch (error) {
      console.log(error);
    }
  }

  function displayWeatherData(data) {
    weatherScreen.innerHTML = "";

    const headings = [
      "Date",
      "Current Temp",
      "Min Temp",
      "Max Temp",
      "Condition",
    ];
    const dataValues = ["datetime", "temp", "tempmin", "tempmax", "conditions"];

    const headerDiv = document.createElement("div");
    headerDiv.classList.add("headings");
    headings.forEach((header) => {
      const value = document.createElement("p");
      value.textContent = header;
      headerDiv.appendChild(value);
    });
    weatherScreen.appendChild(headerDiv);

    data.forEach((day) => {
      const parent = document.createElement("div");

      dataValues.forEach((key) => {
        const value = document.createElement("p");
        value.textContent = day[key];
        parent.appendChild(value);
      });

      weatherScreen.appendChild(parent);
      weatherScreen.style.display = "grid";
    });
  }

  // getWeatherData(PLACE, API_KEY);
})();
