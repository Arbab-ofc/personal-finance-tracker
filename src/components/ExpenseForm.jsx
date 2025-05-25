import React, { useState } from 'react';
import './ExpenseForm.css';
import { motion } from 'framer-motion';

const ExpenseForm = ({ onAddExpense }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = parseFloat(amount);
    if (title && !isNaN(value) && value > 0) {
      onAddExpense({ title, amount: value });
      setTitle('');
      setAmount('');
    }
  };

  return (
    <motion.form className="expense-form" onSubmit={handleSubmit} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <input
        type="text"
        placeholder="Expense title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <motion.button type="submit" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        Add Expense
      </motion.button>
    </motion.form>
  );
};

export default ExpenseForm;
