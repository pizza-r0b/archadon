function keyMirror(obj) {
  const out = {};
  Object.keys(obj).forEach(key => {
    out[key] = key;
  });
  return out;
}

export const actions = keyMirror({
  TOGGLE_MODAL: null,
});
