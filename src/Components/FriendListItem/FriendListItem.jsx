import css from './FriendListItem.module.css';

export const FriendListItem = ({ isOnLine, avatar, name }) => {
  return (
    <li className={css.friendListItem}>
      <div className={isOnLine ? `${css.green}` : `${css.red}`}></div>
      <img src={avatar} alt="User name" width="48" className={css.avatar} />
      <p className={css.friendName}>{name}</p>
    </li>
  );
};
