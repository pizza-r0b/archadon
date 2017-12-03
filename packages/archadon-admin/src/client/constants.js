function keyMirror(obj) {
  const out = {};
  Object.keys(obj).forEach(key => {
    out[key] = key;
  });
  return out;
}

export default keyMirror({
  ADD_TODO: null,
  REMOVE_TODO: null,
  TOGGLE_TODO: null,
  UPDATE_UI: null,
  IMAGE_PREVIEW: null,
  EDIT_ITEM: null,
  UPDATE_PRODUCT_START: null,
  UPDATE_PRODUCT_END: null,
  DELETE_ITEM_START: null,
  DELETE_ITEM_END: null,
  GET_ORDERS_START: null,
  GET_ORDERS_END: null,
});
