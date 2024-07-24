// Product.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProductImage from './ProductImage/ProductImage.js';
import ProductForm from './ProductForm/ProductForm.js';
import styles from './Product.module.scss';

const Product = ({ name, title, basePrice, colors, sizes }) => {
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);

  const getPrice = () => {
    const selectedSize = sizes.find((size) => size.name === currentSize);
    return basePrice + (selectedSize ? selectedSize.additionalPrice : 0);
  };

  const handleAddToCart = (event) => {
    event.preventDefault();

    const summary = {
      name: title,
      price: getPrice(),
      color: currentColor,
      size: currentSize,
    };

    console.log('Product Summary:', summary);
  };

  return (
    <article className={styles.product}>
      <ProductImage name={name} title={title} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: ${getPrice()}</span>
        </header>
        <ProductForm
          sizes={sizes}
          colors={colors}
          currentColor={currentColor}
          currentSize={currentSize}
          setCurrentColor={setCurrentColor}
          setCurrentSize={setCurrentSize}
          getPrice={getPrice}
          handleAddToCart={handleAddToCart}
        />
      </div>
    </article>
  );
};

Product.propTypes = {
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      additionalPrice: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Product;
