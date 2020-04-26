const fetch = require('node-fetch');

const getPeoplePromise = fetch => {
  return fetch('https://swapi.dev/api/people/')
    .then(response => response.json())
    .then(data => {
      // console.log(7,data)
      return {
        count: data.count,
        results: data.results
      }
    })
}

// getPeoplePromise(fetch)

const getPeople = async (fetch) => {
  const getRequest = await fetch('https://swapi.dev/api/people/')
  const data = await getRequest.json()
  // console.log(20,data)
  return {
    count: data.count,
    results: data.results
  }
}

// getPeople(fetch);

module.exports = {
  getPeoplePromise,
  getPeople
}