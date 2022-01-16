export function getImgUrl (url) {
  if (!(typeof url === 'string')) {
    return '';
  }
  const reg = new RegExp('^(\\w)(\\w{2})(\\w+)(jpeg|png)$');
  return url.replace(reg, '$1/$2/$3$4.$4');
}
