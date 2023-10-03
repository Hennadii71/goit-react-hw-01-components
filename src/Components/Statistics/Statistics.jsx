import { getRandomHexColor } from 'holders/getRandomColor.js';
import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statisticsSection}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statisticsList}>
        {stats.map(stat => (
          <li
            key={stat.id}
            className={css.statisticsListItem}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span className={css.statisticsLabel}>{stat.label}</span>
            <span className={css.statisticsPercentage}>{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
