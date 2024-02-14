import React from "react";
import "./Apod.css";
import "./ApodTitle.css";
import "./ApodDate.css";
import "./ApodExplanation.css";
import './Col.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const ApodComponent = (props) => {
  const { NasaData } = props;

  return (
    <div className="container" style={{width:'100%'}}> 
    <div className="row">
    <div className="col-lg-4">
      <h1 className="ApodTitle1">{NasaData.title}</h1>
      <h2 className="ApodDate">{NasaData.date}</h2>
      <img className="img" src={NasaData.url} alt={NasaData.title} />
      <p className="ApodExplanation">{NasaData.explanation}</p>
      </div>
      <div className="col-lg-4">
      <h1 className="ApodTitle2">{NasaData.title}</h1>
       <h2 className="ApodDate2">{NasaData.date}</h2>
       <img className="img2" src={NasaData.url} alt={NasaData.title} />
        <p className="ApodExplanation2">{NasaData.explanation}</p>
        </div>    
        <div className="col-lg-4">
        <h1 className="ApodTitle3">{NasaData.title}</h1>
         <h2 className="ApodDate3">{NasaData.date}</h2>
         <img className="img3" src={NasaData.url} alt={NasaData.title} />
         <p className="ApodExplanation3">{NasaData.explanation}</p>
           
          </div>
          </div>
          </div>
  );
};

export default ApodComponent;
