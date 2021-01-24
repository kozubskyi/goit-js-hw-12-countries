export default function fetchCountries(searchQuery) {
  const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;

  const options = {
    method: 'GET', // по дефолту
    headers: {
      Accept: 'application/json', // MIME-тип данных (в каком формате файл хотим получить (json))
      // Authorization: 'key', // нужен, если для получения данных с API нужен ключ
    },
  };

  return fetch(url, options)
    .then(response => response.json())
    .catch(error => console.log(error));
}
