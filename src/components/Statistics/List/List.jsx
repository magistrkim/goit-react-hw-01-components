import PropTypes from 'prop-types';
import css from './list.module.css';

export const List = ({ stats }) => {
  const elements = stats.map(({ id, label, percentage }) => (
    <li key={id} className={css.item}>
      <span className={css.title}>{label}</span>
      <span className={css.text}>{percentage}%</span>
    </li>
  ));
  return <ul className={css.list}>{elements}</ul>;
};

List.defaultProps = {
  stats: [],
};
List.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
