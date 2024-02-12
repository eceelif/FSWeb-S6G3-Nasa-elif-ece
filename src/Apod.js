import React from "react";

const ApodComponent = (props) => {
  const { NasaData } = props;

  return (
    <div className="Apod">
      
      <h1>{NasaData.title}</h1>
      <h2>{NasaData.date}</h2>
      <img className="img" src={NasaData.url} alt={NasaData.title} />
      <p>{NasaData.explanation}</p>
    </div>
  );
};

export default ApodComponent;
