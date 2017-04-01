export function getType(input) {
  let type;
  if (typeof input === 'object') {
    if (Array.isArray(input)) {
      type = 'array';
    } else {
      type = 'object';
    }
  } else {
    type = typeof input;
  }
  return type;
}
