import './poly';

const options = {
  root: null,
  rootMargin: '50px 0px',
  threshold: 0.01,
};

let webpSupport = void 0;

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.addEventListener('load', resolve);
    img.addEventListener('error', reject);
    img.src = src;
  });
}

//          const { webpsrcset, src, fallbacksrc, srcset } = child.dataset;

function intersectionCb(entries, observer) {
  let i = entries.length;
  for (; i--;) {
    const entry = entries[i];
    const node = entry.target;
    if (entry.intersectionRatio > 0) {
      observer.unobserve(entry.target);

      const { webpsrcset, src, fallbacksrc, srcset } = node.dataset;

      if (src) {
        loadImage(node.dataset.src).then(() => {
          node.src = node.dataset.src;
        }).catch(() => {
          // noop
        });
      } else if (srcset || webpsrcset) {
        node.srcset = webpSupport && webpsrcset ? webpsrcset : srcset;
      }
    }
  }
}

export const observer = new IntersectionObserver(intersectionCb, options);

function observe(node) {
  if (webpSupport === void 0) {
    checkWebP().then(isSupported => {
      webpSupport = isSupported;
      observer.observe(node);
    });
  } else {
    observer.observe(node);
  }
}

function checkWebP() {
  const kTestImages = {
    lossy: 'UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA',
    lossless: 'UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==',
    alpha: 'UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==',
    animation: 'UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA',
  };

  return new Promise((resolve) => {
    const img = new Image();
    img.onload = function () {
      const result = (img.width > 0) && (img.height > 0);
      resolve(result);
    };
    img.onerror = function () {
      resolve(false);
    };
    img.src = `data:image/webp;base64,${kTestImages.lossy}`;
  });
}

export default observe;
