// App.js
import React, { useState } from "react";
import ApiObj from "./NasaData";
import ApodComponent from "./Apod.js";

const Apod = () => {
  const [NasaData, setNasaData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const fetchData = async () => {
    try {
      const apiData = await ApiObj.fetchData(inputValue); // Do not use inputValue directly, pass it as count
      // Ensure that apiData is an array before setting it as NasaData
      if (Array.isArray(apiData)) {
        setNasaData(apiData);
      } else {
        console.error("Invalid data format:", apiData);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    fetchData();
  };

  return (
    <div className="App">
      <div className="Apod">
        <label htmlFor="S1">Sayı yazınız:</label>
        <input
          id="S1"
          type="number"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="button" onClick={handleButtonClick}>
          Veriyi Güncelle
        </button>
        {NasaData ? (
          NasaData.map((item, index) => (
            <ApodComponent key={index} NasaData={item} />
          ))
        ) : (
          <p>...</p>
        )}
      </div>
    </div>
  );
};

export default Apod;
