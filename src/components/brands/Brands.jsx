import React, {useEffect, useState} from 'react';
import classNames from 'classnames'

import {Brand} from "../brand/Brand";

import './Brands.css';

// const brands = [
//   {
//     title: 'GIR: One Year In',
//     subtitle: 'Case Study',
//     src: brand1
//   },
//   {
//     title: 'Introducing Onsen',
//     subtitle: 'new additions',
//     src: brand2
//   },
//   {
//     title: 'Selling Your Shopify Brand: An Introduction',
//     subtitle: 'Mergers & Acquisitions 101',
//     src: brand3
//   },
//   {
//     title: '5 Reasons We Are Optimistic for 2023',
//     subtitle: 'MERGERS & ACQUISITIONS 101',
//     src: brand4
//   },
//   {
//     title: 'Why Right Now is a Great Time to Sell Your Brand',
//     subtitle: 'MERGERS & ACQUISITIONS 101',
//     src: brand5
//   },
//   {
//     title: 'Selling Your Shopify Brand: Week 1',
//     subtitle: 'Mergers & Acquisitions 101',
//     src: brand3
//   },
//   {
//     title: 'Pattern\'s 2022 Update',
//     subtitle: 'THOUGHT LEADERSHIP',
//     src: brand6
//   },
//   {
//     title: 'Introducing Yield',
//     subtitle: 'New Additions',
//     src: brand7
//   },
//   {
//     title: 'Introducing Poketo',
//     subtitle: 'new additions',
//     src: brand8
//   },
// ]
export const Brands = () => {
  const [brands, setBrands] = useState([]);
  const [sort, setSort] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts').then(res => {
      res.json().then(posts => {
        setPosts(posts)
        fetch('https://jsonplaceholder.typicode.com/photos').then(res => {
          res.json().then(photos => {
            setPhotos(photos)
            setBrands(
              posts.slice(0, 3).map((post, index) => {
                return {
                  photo: photos[index],
                  post: post,
                }
              })
            )
          });
        }).catch((err) => {
          console.log(err);
        });
      });
    }).catch((err) => {
      console.log(err);
    });
  }, [])

  let addBrand = () => {
    setBrands(prev => [
        {
          photo: photos[brands.length],
          post: posts[brands.length]
        },
        ...prev
      ]
    )
  }

  let sortBrands = () => {
    setSort(!sort)
    if (sort) {
      setBrands(brands.sort((a, b) => a.post.id - b.photo.id));
      return;
    }
    setBrands(brands.sort((a, b) => a.post.id - b.photo.id).reverse());
  }

  let removeBrand = () => {
    setBrands(brands.slice(1));
  }
  console.log(brands);
  return (
    <div className="brands">
      <div className="container">
        <div className="brands-inner">
          <p className="brands-title">Explore the brands joining Pattern Brands, the sales process & the founders behind them.👇🏽</p>
          <div className="brands-buttons">
            <button
              className={classNames("brands-button", {"disabled": brands.length === 100})}
              onClick={() => addBrand()}
            >add</button>
            <button
              className={classNames("brands-button", {"disabled": brands.length < 2})}
              onClick={() => sortBrands()}
            >sort {sort ? "ascending" : "descending"}</button>
            <button
              className={classNames("brands-button", {"disabled": brands.length === 0})}
              onClick={() => removeBrand()}
            >remove</button>
          </div>
          <div className="brands-items">
            {
              brands.map((brand) => (
                <Brand
                  key={brand.post.title}
                  title={brand.post.title}
                  subtitle={brand.post.body}
                  url={brand.photo.url}
                />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};
