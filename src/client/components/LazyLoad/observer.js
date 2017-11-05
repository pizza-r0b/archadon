import './poly';

const options = {
  root: null,
  rootMargin: '50px 0px',
  threshold: 0.01,
};

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.addEventListener('load', resolve);
    img.addEventListener('error', reject);
    img.src = src;
  });
}

function intersectionCb(entries, observer) {
  let i = entries.length;
  for (; i--;) {
    const entry = entries[i];
    const node = entry.target;
    if (entry.intersectionRatio > 0) {
      observer.unobserve(entry.target);
      loadImage(node.dataset.src).then(() => {
        node.src = node.dataset.src;
      }).catch(() => {
        // noop
      });
    }
  }
}

export const observer = new IntersectionObserver(intersectionCb, options);

function observe(node) {
  observer.observe(node);
}

export default observe;
