const fetch = require('node-fetch')
const swapi = require('./script2')

// done parameter is called only at the end of test so this is a way to do asynchronous testing
it('calls swapi to get people', (done) => {
  expect.assertions(1)
  swapi.getPeople(fetch).then(data => {
    //the expect line below is an assertion
    expect(data.count).toEqual(82)
    done();
  })
})

it('calls swapi to get people with a promise', () => {
  expect.assertions(1)
  // what we do below is return the promise and our expect assertions checks that we hit the expect line
  return swapi.getPeoplePromise(fetch).then(data => {
    expect(data.count).toEqual(82)
  })
})

it('calls swapi to get people with a promise2', () => {
  expect.assertions(2)
  // what we do below is return the promise and our expect assertions checks that we hit the expect line
  return swapi.getPeoplePromise(fetch).then(data => {
    expect(data.count).toEqual(82);
    expect(data.results.length).toBeGreaterThan(9)
  })
})