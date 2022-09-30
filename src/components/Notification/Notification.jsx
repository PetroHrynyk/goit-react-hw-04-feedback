import PropTypes from 'prop-types';
import css from './Notification.module.css';

export default function Notification({ message }) {
  return <p className={css.red}>{message}</p>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
