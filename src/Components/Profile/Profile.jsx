import css from './Profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.card}>
        <img className={css.avatar} src={avatar} alt={username} width="100" />
        <p className={css.username}>Name: {username}</p>
        <p className={css.tag}>Tag: @{tag}</p>
        <p className={css.location}>Location: {location}</p>
      </div>

      <ul className={css.statslist}>
        <li className={css.statslistitem}>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{stats.followers}</span>
        </li>
        <li className={css.statslistitem}>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{stats.views}</span>
        </li>
        <li className={css.statslistitem}>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
