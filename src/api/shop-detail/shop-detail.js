import { get } from '../get';

export function getShopDetail (id) {
  if (!id) {
    return;
  }
  const url = '/api/shop?id=' + id;
  return get(url);
};
export function getMenu (id) {
  if (!id) {
    return;
  }
  const url = '/api/shop_menu?id=' + id;
  return get(url);
};
