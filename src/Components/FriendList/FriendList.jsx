import { FriendListItem } from 'Components/FriendListItem/FriendListItem';
import css from './FriendList.module.css'
export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({id, isOnLine, avatar, name}) => (
        <FriendListItem
          key={id}
          isOnLine={isOnLine}
          avatar={avatar}
          name={name}
        />
      ))}
    </ul>
  );
};
