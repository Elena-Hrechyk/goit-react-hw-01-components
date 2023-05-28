import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <li className={css.item} key={id}>
      <span className={isOnline ? css.labelonline : css.labeloffline}></span>
      <img src={avatar} alt="User avatar" className={css.avatar} width="100" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.prototype = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
