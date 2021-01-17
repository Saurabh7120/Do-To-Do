import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import axios from "axios";

export default function Weather() {
  const [city, setCity] = useState("");
  const [weatherCode, setWeatherCode] = useState(null);
  const [description, setDescription] = useState("");

  useEffect(() => {
    function getWeather(lat, lng) {
      console.log(lat, lng);

      axios({
        url: `https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=${lng}&lat=${lat}`,
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "d43e0105f2msh23bf50131f6a78dp143181jsn7445db6951fa",
          "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com"
        }
      })
        .then((response) => {
          setCity(response.data.data[0].city_name);
          setWeatherCode(response.data.data[0].weather.icon);
          setDescription(response.data.data[0].weather.description);
          console.log(response.data.data[0].weather);
          //return;
        })
        .catch((err) => {
          console.error(err);
          return;
        });
    }

    function getCoordintes() {
      var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };

      function success(pos) {
        var crd = pos.coords;
        var lat = crd.latitude.toString();
        var lng = crd.longitude.toString();
        //console.log(`Latitude: ${lat}, Longitude: ${lng}`);
        getWeather(lat, lng);
        return;
      }

      function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
        return;
      }

      navigator.geolocation.getCurrentPosition(success, error, options);
    }

    //   function getCoordintes() {
    //     var options = {
    //         enableHighAccuracy: true,
    //         timeout: 5000,
    //         maximumAge: 0
    //     };

    //     function success(pos) {
    //         var crd = pos.coords;
    //         var lat = crd.latitude.toString();
    //         var lng = crd.longitude.toString();
    //         var coordinates = [lat, lng];
    //         //console.log(`Latitude: ${lat}, Longitude: ${lng}`);
    //         getCity(coordinates);
    //         return;

    //     }

    //     function error(err) {
    //         console.warn(`ERROR(${err.code}): ${err.message}`);
    //     }

    //     navigator.geolocation.getCurrentPosition(success, error, options);
    // }
    // // Step 2: Get city name
    // function getCity(coordinates) {
    //     var xhr = new XMLHttpRequest();
    //     var lat = coordinates[0];
    //     var lng = coordinates[1];

    //     // Paste your LocationIQ token below.
    //     xhr.open('GET',`https://us1.locationiq.com/v1/reverse.php?key=pk.064dcbc909ed769d126a19ddc2ab5887&lat=${lat}&lon=${lng}&format=json`, true);
    //     xhr.send();
    //     xhr.onreadystatechange = processRequest;
    //     xhr.addEventListener("readystatechange", processRequest, false);

    //     function processRequest(e) {
    //         if (xhr.readyState === 4 && xhr.status === 200) {
    //             var response = JSON.parse(xhr.responseText);
    //             var city = response.address.town;
    //             setCity(city);
    //             return;
    //         }
    //     }
    // }
    getCoordintes();
  }, []);

  return (
    <div style={{ width: "200px", alignSelf: "center" }}>
      <Typography variant="h4" style={{ color: "white" }}>
        {city}
      </Typography>
      <div style={{ display: "flex" }}>
        <Typography variant="h5" style={{ color: "white" }}>
          {description}
        </Typography>
        {weatherCode && (
          <img
            src={`http://openweathermap.org/img/w/${weatherCode.slice(
              1,
              weatherCode.length
            )}.png`}
            alt="weather icon"
          />
        )}
      </div>
    </div>
  );
}
