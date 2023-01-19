import PropTypes from 'prop-types';
import css from '../TransactionHistory/TransactionHistory.module.css';
import clsx from 'clsx';
import { TransactionHistoryItem } from 'components/TransactionHistoryItem/TransactionHistoryItem';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transaction_history}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, ...rest }) => {
          return <TransactionHistoryItem key={id} {...rest} />;
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }).isRequired
  ).isRequired,
};
