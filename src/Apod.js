import React from "react";
import "./Apod.css";
import "./ApodTitle.css";
import "./ApodDate.css";
import "./ApodExplanation.css";

const ApodComponent = (props) => {
  const { NasaData } = props;

  return (
    <div className="Apod">
      <h1 className="ApodTitle">{NasaData.title}</h1>
      <h2 className="ApodDate">{NasaData.date}</h2>
      <img className="img" src={NasaData.url} alt={NasaData.title} />
      <p className="ApodExplanation">{NasaData.explanation}</p>
      <img className="img2" src={NasaData.hurl} alt={NasaData.title}/>
    </div>
  );
};

export default ApodComponent;
