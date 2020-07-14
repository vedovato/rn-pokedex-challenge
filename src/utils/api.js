const API_URI = 'https://pokeapi.co/api/v2/pokemon';

const pokeApi = async (path = API_URI) => {
  const raw = await fetch(path);
  return await raw.json();
};

export default pokeApi;
