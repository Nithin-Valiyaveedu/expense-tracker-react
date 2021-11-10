import React from "react";

const Transactions = ({ transaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <li
      key={transaction.id}
      className={transaction.amount < 0 ? "minus" : "plus"}
    >
      {transaction.text}
      <span>
        {sign} Rs {Math.abs(transaction.amount)}
      </span>
      <button className="delete-btn">x</button>
    </li>
  );
};

export default Transactions;
