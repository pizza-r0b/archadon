export function action(type = '', payload = {}, meta = null, error = null) {
  return {
    type, payload, meta, error,
  };
}
