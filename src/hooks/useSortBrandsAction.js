import { actions } from '../reducers/brandReducer';

const useSortBrandsAction = (brandId, currentBrandId) => ({
  type: actions.SORT_BRANDS,
  payload: {
    brandId,
    currentBrandId,
  }
});

export default useSortBrandsAction;
