const googleSearch = require('./script');

dbMock = [
  'dog.com',
  'cheesepuff.com',
  'disney.com',
  'dogpictures.com'
];

describe('googleSerch', () => {
  it ('this is a test', () => {
    expect('hello').toBe('hello')
    googleSearch('testtest', dbMock)
  })
  
  it('is searching google', () => {
    expect(googleSearch('testtest', dbMock)).toEqual([])
    expect(googleSearch('dog', dbMock)).toEqual(['dog.com','dogpictures.com'])
  })
  
  it('can handle null and undefined', () => {
    expect(googleSearch(undefined, dbMock)).toEqual([])
    expect(googleSearch(null, dbMock)).toEqual([])
  })
  
  it('will return 3 values back at most', () => {
    expect(googleSearch('.com', dbMock).length).toEqual(3)
  })
})
