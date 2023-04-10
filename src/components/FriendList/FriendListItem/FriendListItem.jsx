import PropTypes from 'prop-types';
import css from './friend-list-item.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <span className={isOnline ? css.statusOnline : css.statusOffline}>
        {isOnline}
      </span>
      <img className={css.img} src={avatar} alt="User avatar" width="48" />
      <p className={css.text}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
