import css from './FriendListItem.module.css';

export const FriendListItem = ({ isOnLine, avatar, name, id }) => {
  return (
    <li className={css.friendListItem} key={id}>
      <div className={isOnLine ? css.green : css.red}></div>
      <img src={avatar} alt="User name" width="48" className={css.avatar} />
      <p className={css.friendName}>{name}</p>
    </li>
  );
};
