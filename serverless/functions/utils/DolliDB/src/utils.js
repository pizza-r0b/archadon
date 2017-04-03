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

export function deeepExtend(destination, source) {
  for (const property in source) {
    if (source.hasOwnProperty(property)) {
      if (source[property] && source[property].constructor &&
        source[property].constructor === Object) {
        destination[property] = typeof destination[property] === 'object' ? destination[property] : {};
        deeepExtend(destination[property], source[property]);
      } else if (source[property] && Array.isArray(source[property])) {
        destination[property] = Array.isArray(destination[property]) ? destination[property] : [];
        for (let i = 0; i < source[property].length; i += 1) {
          if (source[property][i] !== void 0) {
            if (destination[property][i] && destination[property][i].constructor && destination[property][i].constructor === Object) {
              deeepExtend(destination[property], source[property]);
            } else {
              destination[property][i] = source[property][i];
            }
          }
        }
      } else {
        destination[property] = source[property];
      }
    }
    return destination;
  }
}
