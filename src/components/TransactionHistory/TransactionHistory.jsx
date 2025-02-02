import css from "./TransactionHistory.module.css";

function TransactionHistory({ items }) {
  return (
    <div className={css.wrapper}>
      <table className={css.table}>
        <thead>
          <tr>
            <th className={css.title}>Type</th>
            <th className={css.title}>Amount</th>
            <th className={css.title}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => {
            return (
              <tr className={css.row} key={item.id}>
                <td className={css.cell}>
                  {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                </td>
                <td className={css.cell}>{item.amount}</td>
                <td className={css.cell}>{item.currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionHistory;
