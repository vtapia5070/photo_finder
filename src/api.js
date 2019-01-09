const baseUrl = `https://api.unsplash.com`;
const clientID = process.env.REACT_APP_CLIENT_ID;
const headers = new Headers({
  'Accept-Version': 'v1',
  'Authorization': `Client-ID ${clientID}`
});
const routes = {
  search: '/search/photos',
};

export const searchPhotosByQuery = (query) => {

  const url = `${baseUrl}${routes.search}?perPage=10&query=${query}`;

  return fetch(url, {
    headers: headers,
  })
    .then((res) => res.json())
    .then(res => {
      if (res.errors && res.errors.length) {
        return new Error(res.errors[0]);
      }
      return Promise.resolve(res);
    })
    .catch((err) => {
      console.log(err);
    });
}