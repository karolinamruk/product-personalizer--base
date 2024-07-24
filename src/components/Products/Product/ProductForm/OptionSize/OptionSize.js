import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './OptionSize.module.scss';

const OptionSize = ({ sizes, currentSize, setCurrentSize }) => {
  return (
    <ul className={styles.choices}>
      {sizes.map((size) => (
        <li key={size.name}>
          <button
            type="button"
            className={clsx(size.name === currentSize && styles.active)}
            onClick={() => setCurrentSize(size.name)}
          >
            {size.name}
          </button>
        </li>
      ))}
    </ul>
  );
};

OptionSize.propTypes = {
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      additionalPrice: PropTypes.number.isRequired,
    })
  ).isRequired,
  currentSize: PropTypes.string.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
};

export default OptionSize;
