import fetch from 'isomorphic-fetch';
const  Postdatas = (url) => {
    return fetch(url).then(response => {
      const postdetails = response.json()
      return postdetails;
    })
  } 