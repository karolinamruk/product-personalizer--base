import styles from './Button.module.scss';
import clsx from 'clsx';

const Button = (props) => {
  return (
    <button
      type={props.type || 'button'}
      className={clsx(styles.button, props.className)}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
