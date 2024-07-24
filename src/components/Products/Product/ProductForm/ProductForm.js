import PropTypes from 'prop-types';
import OptionColor from './OptionColor/OptionColor.js';
import OptionSize from './OptionSize/OptionSize.js';
import Button from './Button/Button.js';
import styles from './ProductForm.module.scss';

const ProductForm = ({
  sizes,
  colors,
  currentColor,
  currentSize,
  setCurrentColor,
  setCurrentSize,
  handleAddToCart,
}) => {
  return (
    <form>
      <div className={styles.sizes}>
        <h3 className={styles.optionLabel}>Sizes</h3>
        <OptionSize
          sizes={sizes}
          currentSize={currentSize}
          setCurrentSize={setCurrentSize}
        />
      </div>
      <div className={styles.colors}>
        <h3 className={styles.optionLabel}>Colors</h3>
        <OptionColor
          colors={colors}
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
        />
      </div>
      <Button className={styles.button} onClick={handleAddToCart}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  );
};

ProductForm.propTypes = {
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      additionalPrice: PropTypes.number.isRequired,
    })
  ).isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentColor: PropTypes.string.isRequired,
  currentSize: PropTypes.string.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
};

export default ProductForm;
