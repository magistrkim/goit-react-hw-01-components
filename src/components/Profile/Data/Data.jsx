import PropTypes from 'prop-types';
import css from './data.module.css';

export const Data = ({ stats }) => {
  return (
    <ul className={css.stats}>
      <li className={css.item}>
        <span className={css.title}>Followers</span>
        <span className={css.text}>{stats.followers}</span>
      </li>
      <li className={css.item}>
        <span className={css.title}>Views</span>
        <span className={css.text}>{stats.views}</span>
      </li>
      <li className={css.item}>
        <span className={css.title}>Likes</span>
        <span className={css.text}>{stats.likes}</span>
      </li>
    </ul>
  );
};

Data.propTypes = {
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
