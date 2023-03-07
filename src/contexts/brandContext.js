import React, { useMemo, useReducer } from 'react';
import PropTypes from 'prop-types';

import { brandReducer } from '../reducers/brandReducer';

const initState = {
  brands: [],
  sort: false,
  photos: [],
  posts: [],
  input: {
    active: false,
    brandId: null,
  },
  error: false,
};
export const BrandContext = React.createContext();
function BrandContextProvider({ children }) {
  const [state, dispatch] = useReducer(brandReducer, initState);

  const BrandBaseProviderValue = useMemo(() => ({ ...state, dispatch }), [state, dispatch]);

  return (
    <BrandContext.Provider value={BrandBaseProviderValue}>
      {children}
    </BrandContext.Provider>
  );
}

BrandContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BrandContextProvider;
