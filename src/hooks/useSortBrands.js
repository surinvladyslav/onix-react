const useSortBrands = (a, b) => {
  if (a.id > b.id) {
    return 1;
  }
  return -1;
};

export default useSortBrands;
