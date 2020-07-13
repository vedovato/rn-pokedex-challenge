const API_URI = 'https://pokeapi.co/api/v2';

//FIXME: Update parameter API. Maybe an object would fit better
const pokeApi = async (path, params = '', takeFullUrl = false) => {
  const URI = !takeFullUrl
    ? `${API_URI}/${path + params}` // compose url
    : path + params; // uses path as full url

  const raw = await fetch(URI);
  const data = await raw.json();
  return data;
};

export default pokeApi;
