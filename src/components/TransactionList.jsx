import React from 'react';
import './TransactionList.css';
import { motion } from 'framer-motion';

const TransactionList = ({ expenses }) => {
  return (
    <motion.div className="transaction-list" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h3>🧾 Transaction History</h3>
      {expenses.length === 0 ? (
        <p className="empty">No expenses recorded yet.</p>
      ) : (
        <ul>
          {expenses.map((item, index) => (
            <motion.li key={index} className="transaction-item" whileHover={{ scale: 1.02 }}>
              <span>{item.title}</span>
              <span>₹ {item.amount}</span>
            </motion.li>
          ))}
        </ul>
      )}
    </motion.div>
  );
};

export default TransactionList;
