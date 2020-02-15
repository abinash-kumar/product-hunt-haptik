

export const makeApiCall = (baseurl, type, payload) => {
    let url = baseurl;

    if(type==='GET' && payload && typeof payload === 'object' && payload.constructor === Object){
      url = url.concat('?');
      Object.keys(payload).map(key=>{
        url = url.concat(key, "=", payload[key], "&");
      })
    }
    url = url.substring(0, url.length-1);
    return fetch(url,{
        method: type,
        headers: {
          "Content-Type": "application/json",
          Authorization : 'Bearer WBcnXbkwhQBYVULertnUKUbX0GiIt4M37zxa0__eMFY'
        },
        ...((type === 'POST') ? {body: JSON.stringify(payload)}: ''),
      })
        .then(res => res.json())
        .then(
          (result) => result,
          (error) => console.log(error, "error")
        )
  };