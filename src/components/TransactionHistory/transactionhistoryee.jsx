import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ transactions }) => {
  return (
    <table className={css.table}>
      <thead>
        <tr className={css.table_title}>
          <th className={css.table_cell}>Type</th>
          <th className={css.table_cell}>Amount</th>
          <th className={css.table_cell}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <tr className={css.table_data} key={id}>
            <td className={css.table_cell}>{type}</td>
            <td className={css.table_cell}>{amount}</td>
            <td className={css.table_cell}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
