import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import ŞehirlerJSON from "../data/Şehirler.json";

const HavaDurumuContext = createContext();
export const useHavaDurumu = () => useContext(HavaDurumuContext);

export
    const HavaDurumuProvider = ({ children }) => {
        const [HavaDurumuData, setHavaDurumuData] = useState([]);
        const [city, setCity] = useState(ŞehirlerJSON[0]);

        useEffect(() => { GetWeatherApi(); }, [city]);

        const GetWeatherApi = async () => {
            const url = "https://api.openweathermap.org/data/2.5/";
            const key = "api_code"; 
            const { data } = await axios.get(
                `${url}weather?q=${city.name},tr&units=metric&lang=tr&APPID=${key}`
                // `${url}onecall?lat=${city.latitude}&lon=${city.longitude}&units=metric&exclude=current,minutely,hourly,alerts&lang=tr&APPID=${key}`
            );
            console.log("data:");
            console.log(data);
            // setHavaDurumuData(data.daily);
            setHavaDurumuData(data);
        };

        const Günler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi",];

        const date = new Date();
        let todayDate = date.toLocaleDateString();
        let GünString = date.getDay();
        let day;
        switch (GünString) {
            case 0: day = "Pazar"; break;
            case 1: day = "Pazartesi"; break;
            case 2: day = "Salı"; break;
            case 3: day = "Çarşamba"; break;
            case 4: day = "Perşembe"; break;
            case 5: day = "Cuma"; break;
            case 6: day = "Cumartesi"; break;
            default: day = "";
        }

        const values = {
            city,
            setCity,
            ŞehirlerJSON,
            day,
            Günler,
            GünString,
            todayDate,
            HavaDurumuData,
            setHavaDurumuData,
        };

        return (<HavaDurumuContext.Provider value={values}>{children}</HavaDurumuContext.Provider>);
    };



