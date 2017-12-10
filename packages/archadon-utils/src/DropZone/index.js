export { default as DropZone } from './DropZone';

export const readAsBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      resolve({ file, dataURL: reader.result });
    });
    reader.readAsDataURL(file);
  });
};
