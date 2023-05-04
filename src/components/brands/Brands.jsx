import React, { useContext, useState } from 'react';
import cn from 'classnames';

import Brand from '../brand/Brand';
import Input from '../input/Input';

import { BrandContext } from '../../contexts/brandContext';
import { actions } from '../../reducers/brandReducer';

import useFetch from '../../hooks/useFetch';
import useSortBrands from '../../hooks/useSortBrands';

import './Brands.css';

function Brands() {
  const {
    brands,
    photos,
    posts,
    dispatch
  } = useContext(BrandContext);

  useFetch();

  const [currentBrand, setCurrentBrand] = useState(null);

  const dragStartHandler = (e, brand) => {
    setCurrentBrand(brand);
  };

  const dragEndHandler = (e) => {
    e.preventDefault();
  };

  const dragOverHandler = (e) => {
    e.preventDefault();
  };

  const dropHandler = (e, brand) => {
    e.preventDefault();
    dispatch({
      type: actions.SORT_BRANDS,
      payload: {
        brandId: brand.id,
        currentBrandId: currentBrand.id
      }
    });
  };

  const onClickBrandHandler = (event, brandId) => {
    if (event.detail === 2) {
      dispatch({
        type: actions.INPUT,
        payload: {
          active: true,
          brandId
        }
      });
    }
    dispatch({
      type: actions.ACTIVE_BRAND,
      payload: brandId,
    });
  };

  const onClickAddBrandHandler = () => {
    dispatch({
      type: actions.ADD_BRAND,
      payload: {
        id: brands.length,
        active: false,
        photo: photos[brands.length],
        post: posts[brands.length]
      },
    });
  };

  const onClickRemoveBrandHandler = () => {
    dispatch({
      type: actions.REMOVE_BRAND,
      payload: brands.length
    });
  };

  return (
    <div className="brands">
      <div className="container">
        <div className="brands-inner">
          <p className="brands-title">
            Explore the brands joining Pattern Brands, the sales process & the founders behind them.👇🏽
          </p>
          <div className="brands-buttons">
            <button
              className={cn('brands-button', { disabled: brands.length === 100 })}
              onClick={() => onClickAddBrandHandler()}
              type="button"
            >
              add brand
            </button>
            <button
              className={cn('brands-button', { disabled: brands.length < 2 })}
              onClick={() => {}}
              type="button"
            >
              sort
            </button>
            <button
              className={cn('brands-button', { disabled: brands.length === 0 })}
              onClick={() => onClickRemoveBrandHandler()}
              type="button"
            >
              remove brand
            </button>
          </div>
          <div className="brands-items">
            {
              brands
              && brands
                .sort(useSortBrands)
                .map((brand) => (
                  <Brand
                    key={brand.post.title}
                    title={brand.post.title}
                    description={brand.post.body}
                    url={brand.photo.url}
                    active={brand.active}
                    onClick={(event) => onClickBrandHandler(event, brand.id)}
                    onDragStart={(event) => dragStartHandler(event, brand)}
                    onDragEnd={(event) => dragEndHandler(event)}
                    onDragLeave={(event) => dragEndHandler(event)}
                    onDragOver={(event) => dragOverHandler(event)}
                    onDrop={(event) => dropHandler(event, brand)}
                  />
                )).reverse()
            }
          </div>
          <Input />
        </div>
      </div>
    </div>
  );
}

export default Brands;
