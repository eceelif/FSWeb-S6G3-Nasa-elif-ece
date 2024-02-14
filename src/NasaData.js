const api_key = "eizXyyCxYnegNCb3xlTrOMggDwdkRruFkMw3lqUz";

let ApiObj = {
  fetchData: async function (inputValue) {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${api_key}&count=${inputValue}`, requestOptions);
    let result = await response.json();
    return result;
  }
}

export default ApiObj;
