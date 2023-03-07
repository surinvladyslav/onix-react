import { useContext, useEffect } from 'react';

import { BrandContext } from '../contexts/brandContext';
import { actions } from '../reducers/brandReducer';

const useFetch = () => {
  const { dispatch } = useContext(BrandContext);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [resPosts, resPhotos] = await Promise.all([
          fetch(`${apiUrl}/posts`),
          fetch(`${apiUrl}/photos`)
        ]);
        const [posts, photos] = await Promise.all([
          resPosts.json(),
          resPhotos.json()
        ]);
        dispatch({ type: actions.INITIAL_POSTS, payload: posts });
        dispatch({ type: actions.INITIAL_PHOTOS, payload: photos });
        dispatch({
          type: actions.INITIAL_BRANDS,
          payload: posts
            .slice(0, 8)
            .map((post, index) => {
              delete photos[index].id;
              delete post.id;

              return {
                id: index,
                active: false,
                photo: photos[index],
                post,
              };
            })
        });
      } catch (err) {
        dispatch({
          type: actions.ERROR,
          payload: true
        });
      }
    };

    fetchData();
  }, []);
};

export default useFetch;
