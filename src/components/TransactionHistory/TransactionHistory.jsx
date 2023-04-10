import { TransactionItem } from './TransactionItem/TransactionItem';
import css from './transaction-history.module.css';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  const transactionElement = items.map(item => (
    <TransactionItem key={item.id} {...item} />
  ));
  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>{transactionElement}</tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
