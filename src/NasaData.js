// NasaData.js
const api_key = "DEMO_KEY";

let ApiObj = {
  fetchData: async function (count) {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    /*let response = 
    [
      {
        title:"test title",
        date:"test date",
        url:"http://resources.finalsite.net/images/f_auto,q_auto,t_image_size_3/v1645721429/rdaleorg/qblyqgwortzxvb3q4wct/testing.jpg",
        explanation:"exp sample"
      }
    ] */
   let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${api_key}&count=${count}`, requestOptions);
    let result = response.json();
    console.log(result);
    return result;
  }
}

export default ApiObj;
