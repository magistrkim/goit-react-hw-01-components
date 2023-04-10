import { FriendListItem } from './FriendListItem/FriendListItem';
import css from './friend-list.module.css';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  const friendsElement = friends.map(friend => (
    <FriendListItem key={friend.id} {...friend} />
  ));
  return <ul className={css.list}>{friendsElement}</ul>;
};

FriendList.defaultProps = {
  friends: [],
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
