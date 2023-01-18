import { StatisticItem } from 'components/StatisticItem/StatisticItem';
import PropTypes from 'prop-types';

export const Statistics = ({ title, data }) => {
  return (
    <>
      {title && <h2 className="title">Upload stats</h2>}
      <ul className="stat-list">
        {data.map(({ id, label, percentage }) => (
          <StatisticItem key={id} label={label} percentage={percentage} />
        ))}
      </ul>
    </>
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
