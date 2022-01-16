import { get } from '../get';

export function getEntries () {
  // const url = '/api/entries';
  const url = 'static/api_entries.json';
  return get(url);
}

export function getRestaurants (offset) {
  const querystring = '?offset=' + (offset || 0);
  // const url = '/api/restaurants' + querystring;
  const url = 'static/api_restaurants.json' + querystring;
  return get(url);
}
