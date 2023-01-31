import React from 'react';

import './index.css';
import {Brand} from "../brand";

export const Brands = () => {
  const brands = [
    {
      title: 'GIR: One Year In',
      subtitle: 'Case Study',
      src: 'brand-1.png'
    },
    {
      title: 'Introducing Onsen',
      subtitle: 'new additions',
      src: 'brand-2.png'
    },
    {
      title: 'Selling Your Shopify Brand: An Introduction',
      subtitle: 'Mergers & Acquisitions 101',
      src: 'brand-3.png'
    },
    {
      title: '5 Reasons We Are Optimistic for 2023',
      subtitle: 'MERGERS & ACQUISITIONS 101',
      src: 'brand-4.png'
    },
    {
      title: 'Why Right Now is a Great Time to Sell Your Brand',
      subtitle: 'MERGERS & ACQUISITIONS 101',
      src: 'brand-5.png'
    },
    {
      title: 'Selling Your Shopify Brand: Week 1',
      subtitle: 'Mergers & Acquisitions 101',
      src: 'brand-3.png'
    },
    {
      title: 'Pattern\'s 2022 Update',
      subtitle: 'THOUGHT LEADERSHIP',
      src: 'brand-6.png'
    },
    {
      title: 'Introducing Yield',
      subtitle: 'New Additions',
      src: 'brand-7.png'
    },
    {
      title: 'Introducing Poketo',
      subtitle: 'new additions',
      src: 'brand-8.png'
    },
  ]
  return (
    <div className="brands">
      <div className="container">
        <div className="brands-inner">
          <p className="brands-title">Explore the brands joining Pattern Brands, the sales process & the founders behind them.👇🏽</p>
          <div className="brands-items">
            {
              brands.map((brand, index) => (
                <Brand
                  key={index}
                  title={brand.title}
                  subtitle={brand.subtitle}
                  src={brand.src}
                />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};
