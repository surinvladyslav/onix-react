import { actions } from '../reducers/brandReducer';

const useChangeBrandsAction = (brandId) => ({
  type: actions.INPUT,
  payload: {
    active: true,
    brandId
  }
});

export default useChangeBrandsAction;
