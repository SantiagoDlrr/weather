import Image from "next/image";

export default function CityCard() {
  const weather = {
    location: {
      name: "Mexico City",
      country: "Mexico"
    },
    current: {
      temp_c: 22,
      condition: {
        text: "Partly Cloudy",
        icon: "https://cdn.weatherapi.com/weather/64x64/day/116.png"
      },
      wind_kph: 15,
      humidity: 60
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">{weather.location.name}</h2>
          <p className="text-gray-600">{weather.location.country}</p>
        </div>
        <img 
          src={weather.current.condition.icon} 
          alt={weather.current.condition.text}
          className="w-16 h-16"
        />
      </div>
      <div className="mt-4">
        <p className="text-3xl font-bold">{weather.current.temp_c}°C</p>
        <p className="text-gray-700">{weather.current.condition.text}</p>
        <div className="mt-2 text-sm text-gray-600">
          <p>Wind: {weather.current.wind_kph} km/h</p>
          <p>Humidity: {weather.current.humidity}%</p>
        </div>
      </div>
    </div>
  );
}