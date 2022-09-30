import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export default function FeedbackButtons({ options, onLeaveFeedback }) {
  return (
    <ul className={css.btnList}>
      {options.map(option => (
        <li key={option} className={css.btnItem}>
          <button
            className={css.btn}
            type="button"
            onClick={onLeaveFeedback}
            name={option}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
}

FeedbackButtons.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
