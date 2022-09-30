import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <ul className={css.list}>
      <li className={css.item}>
        <p className={css.component}>
          Good:<span>{good}</span>
        </p>
      </li>
      <li className={css.item}>
        <p className={css.component}>
          Neutral:<span>{neutral}</span>
        </p>
      </li>
      <li className={css.item}>
        <p className={css.component}>
          Bad:<span>{bad}</span>
        </p>
      </li>
      <li className={css.item}>
        <p className={css.component}>
          Total:<span>{total}</span>
        </p>
      </li>
      <li className={css.item}>
        <p className={css.component}>
          Positive feedback:<span>{positivePercentage}%</span>
        </p>
      </li>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
