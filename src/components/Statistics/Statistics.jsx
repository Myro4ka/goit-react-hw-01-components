import PropTypes from 'prop-types';
import css from '../Statistics/Statistics.module.css';
import { StatisticItem } from 'components/StatisticItem/StatisticItem';

export const Statistics = ({ title, data }) => {
  return (
    <div className={css.statistics}>
      {title ? (
        <>
          <h2 className={css.title}>Upload stats</h2>
          <ul className={css.stat_list}>
            {data.map(({ id, label, percentage }) => (
              <StatisticItem key={id} label={label} percentage={percentage} />
            ))}
          </ul>
        </>
      ) : (
        <ul className={css.stat_list}>
          {data.map(({ id, label, percentage }) => (
            <StatisticItem key={id} label={label} percentage={percentage} />
          ))}
        </ul>
      )}
    </div>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ).isRequired,
};
