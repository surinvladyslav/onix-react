export const actions = {
  ERROR: 'ERROR',
  INPUT: 'INPUT',
  INITIAL_BRANDS: 'INITIAL_BRANDS',
  INITIAL_POSTS: 'INITIAL_POSTS',
  INITIAL_PHOTOS: 'INITIAL_PHOTOS',
  ACTIVE_BRAND: 'ACTIVE_BRAND',
  ADD_BRAND: 'ADD_BRAND',
  CHANGE_BRAND: 'CHANGE_BRAND',
  SORT_BRANDS: 'SORT_BRANDS',
  REMOVE_BRAND: 'REMOVE_BRAND',
};
export const brandReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case actions.INITIAL_BRANDS:
      return { ...state, brands: payload };
    case actions.INITIAL_POSTS:
      return { ...state, posts: payload };
    case actions.INITIAL_PHOTOS:
      return { ...state, photos: payload };
    case actions.ADD_BRAND:
      return { ...state, brands: [...state.brands, payload] };
    case actions.ACTIVE_BRAND:
      return {
        ...state,
        brands: state.brands.map((c) => {
          if (c.id === payload) {
            return {
              ...c,
              active: !c.active
            };
          }
          return {
            ...c,
            active: false,
          };
        })
      };
    case actions.CHANGE_BRAND:
      return {
        ...state,
        brands: state.brands.map((c) => {
          if (c.id === payload.brandId) {
            return {
              ...c,
              post: {
                ...c.post,
                title: payload.title
              }
            };
          }
          return c;
        })
      };
    case actions.REMOVE_BRAND:
      return { ...state, brands: state.brands.slice(0, -1) };
    case actions.SORT_BRANDS:
      return {
        ...state,
        brands: state.brands.map((c) => {
          if (c.id === payload.brandId) {
            return {
              ...c,
              id: payload.currentBrandId,
            };
          }
          if (c.id === payload.currentBrandId) {
            return {
              ...c,
              id: payload.brandId,
            };
          }
          return c;
        })
      };
    case actions.INPUT:
      return { ...state, input: payload };
    case actions.ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
};
