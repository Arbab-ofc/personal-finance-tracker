import React from 'react';
import './BalanceDisplay.css';
import { motion } from 'framer-motion';

const BalanceDisplay = ({ income, expenses }) => {
  const totalExpense = expenses.reduce((acc, curr) => acc + curr.amount, 0);
  const balance = income - totalExpense;

  return (
    <motion.div className="balance-display" initial={{ scale: 0.9 }} animate={{ scale: 1 }}>
      <h2>💰 Current Balance: ₹ {balance.toFixed(2)}</h2>
    </motion.div>
  );
};

export default BalanceDisplay;
