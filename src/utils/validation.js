const isValidUrl = (value) => {
  try {
    const url = new URL(value);
    if (url?.protocol !== 'http:' && url?.protocol !== 'https:') {
      return false;
    }
  } catch (e) {
    return false;
  }
  return true;
};

export {
  isValidUrl,
};
