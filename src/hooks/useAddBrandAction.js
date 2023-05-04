import { actions } from '../reducers/brandReducer';

const useAddBrandAction = (brands, posts, photos) => ({
  type: actions.ADD_BRAND,
  payload: {
    id: brands.length,
    active: false,
    photo: photos[brands.length],
    post: posts[brands.length]
  },
});

export default useAddBrandAction;
