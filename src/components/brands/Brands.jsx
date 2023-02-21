import React from 'react';

import {Brand} from "../brand/Brand";

import brand1 from "./assets/brand-1.png"
import brand2 from "./assets/brand-2.png"
import brand3 from "./assets/brand-3.png"
import brand4 from "./assets/brand-4.png"
import brand5 from "./assets/brand-5.png"
import brand6 from "./assets/brand-6.png"
import brand7 from "./assets/brand-7.png"
import brand8 from "./assets/brand-8.png"

import './Brands.css';

export const Brands = () => {
  const brands = [
    {
      title: 'GIR: One Year In',
      subtitle: 'Case Study',
      src: brand1
    },
    {
      title: 'Introducing Onsen',
      subtitle: 'new additions',
      src: brand2
    },
    {
      title: 'Selling Your Shopify Brand: An Introduction',
      subtitle: 'Mergers & Acquisitions 101',
      src: brand3
    },
    {
      title: '5 Reasons We Are Optimistic for 2023',
      subtitle: 'MERGERS & ACQUISITIONS 101',
      src: brand4
    },
    {
      title: 'Why Right Now is a Great Time to Sell Your Brand',
      subtitle: 'MERGERS & ACQUISITIONS 101',
      src: brand5
    },
    {
      title: 'Selling Your Shopify Brand: Week 1',
      subtitle: 'Mergers & Acquisitions 101',
      src: brand3
    },
    {
      title: 'Pattern\'s 2022 Update',
      subtitle: 'THOUGHT LEADERSHIP',
      src: brand6
    },
    {
      title: 'Introducing Yield',
      subtitle: 'New Additions',
      src: brand7
    },
    {
      title: 'Introducing Poketo',
      subtitle: 'new additions',
      src: brand8
    },
  ]
  return (
    <div className="brands">
      <div className="container">
        <div className="brands-inner">
          <p className="brands-title">Explore the brands joining Pattern Brands, the sales process & the founders behind them.👇🏽</p>
          <div className="brands-items">
            {
              brands.map((brand) => (
                <Brand
                  key={brand.title}
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
