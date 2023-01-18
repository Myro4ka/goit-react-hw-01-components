export const StatisticItem = ({ label, percentage }) => {
  console.log(label);
  return (
    <li className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </li>
  );
};
