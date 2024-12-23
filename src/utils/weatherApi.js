export const getCurrentWeather = ({ latitude, longitude }, APIkey) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      Promise.reject(`Error: ${res.status}`);
    }
  });
};

export const filterWeatherData = (data) => {
  const result = {};
  result.city = data.name;
  result.type = getWeatherType(data.main.temp);

  result.weather = { F: `${Math.round(data.main.temp)}` };
  result.weather.C = `${Math.round(((data.main.temp - 32) * 5) / 9)}`;

  return result;
};

const getWeatherType = (temperature) => {
  if (temperature >= 86.0) {
    return "hot";
  } else if (temperature >= 69.0 && temperature <= 85.99) {
    return "warm";
  } else {
    return "cold";
  }
};
