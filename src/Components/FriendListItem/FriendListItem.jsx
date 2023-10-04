import css from './FriendListItem.module.css';

export const FriendListItem = ({ isOnline, avatar, name, id }) => {
  return (
    <li className={css.friendListItem} key={id}>
      <span className={isOnline ? css.green : css.red}></span>
      <img src={avatar} alt="User name" width="48" className={css.avatar} />
      <p className={css.friendName}>{name}</p>
    </li>
  );
};
