import React from "react";
import { useHavaDurumu } from "./HavaDurumu Provider.js";

function Card() {
  const { HavaDurumuData: HDD, Günler, city } = useHavaDurumu();

  return (
    <div className="content">
      <h1 className="city-title" style={{ border: "2px ridge slategrey", padding: "10px 20px" }} >{city.name}</h1>
      <div className="HavaDurumu-Gövde">
        {console.log("HDD: ")}{console.log(HDD)}
        {console.log("HDD.W: ")}{console.log(HDD.weather)}
        {HDD && (HDD.length || HDD.id) &&
          <div key={HDD.dt} className="HavaDurumu-Orta">
            <div className="card-header" style={{ border: "2px ridge slategrey", padding: "10px 20px" }} ><h2>
              {new Date(HDD.dt * 1000).toLocaleDateString()} &nbsp; {Günler[new Date(HDD.dt * 1000).getDay()]}<br />
              {Math.floor(HDD.main.temp)}°C / {HDD.weather[0].description.toUpperCase()}
            </h2>
            </div>
            <div className="card-body" >

              <table className="HavaDurumu-Isı" style={{ backgroundColor: "black", width: "100%", border: "2px ridge slategrey", padding: "10px 20px" }} >
                <tbody>
                  <tr><td>Nem:</td><td>{Math.floor(HDD.main.humidity)}</td>
                    <td rowSpan="4"><img style={{ backgroundColor: "black" }}
                      src={`http://openweathermap.org/img/wn/${HDD.weather[0].icon}@2x.png`}
                      alt="HavaDurumu Icon"
                    /></td>
                  </tr>
                  <tr><td><br />Hissedilen:</td><td>{Math.floor(HDD.main.feels_like)}°C</td></tr>
                  <tr><td><br />{Math.floor(HDD.main.temp_min)}°C </td><td> {Math.floor(HDD.main.temp_max)}°C</td></tr>
                  <tr><td><br />Rüzgar: </td><td>{(HDD.wind.speed)}</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default Card;
