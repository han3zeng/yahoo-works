import validation from './validation';

function debounce(fn, interval) {
  let timer;
  return function decorator(...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => fn.apply(this, args), interval);
  };
}

const _ = {
  debounce,
};

export {
  _,
  validation,
};
