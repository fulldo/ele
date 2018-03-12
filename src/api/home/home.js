import { get } from '../get';

export function getEntries () {
  const url = '/api/entries';
  return get(url);
}

export function getRestaurants (offset) {
  const querystring = '?offset=' + (offset || 0);
  const url = '/api/restaurants' + querystring;
  return get(url);
}
