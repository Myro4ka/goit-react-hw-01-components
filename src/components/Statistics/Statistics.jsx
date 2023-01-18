import { StatisticItem } from 'components/StatisticItem/StatisticItem';

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
