import React from "react";
import { useHavaDurumu } from "./HavaDurumu Provider.js";

function Başlık() {
  const { city, setCity, ŞehirlerJSON, day, todayDate } = useHavaDurumu();

  const changeCityName = (e) => { setCity(ŞehirlerJSON.find((f) => f.name === e.target.value)); };

  return (
    <div className="header" >
      <h1>Hava Durumu</h1>
      <div className="selectbar" style={{ border: "2px ridge slategrey" }}>
        <select name="cityname" id="cityname" value={city.name} onChange={changeCityName}>
          {ŞehirlerJSON.map((item, key) => (<option key={key} value={item.name}>{item.name}</option>))}
        </select>
        <div>
          <h3 className="date"><span>{todayDate}</span><br /><span>{day}</span></h3>
        </div>
      </div>
    </div>
  );
}

export default Başlık;
