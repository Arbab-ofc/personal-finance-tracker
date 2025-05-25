import React, { useState } from 'react';
import './IncomeForm.css';
import { motion } from 'framer-motion';

const IncomeForm = ({ onAddIncome }) => {
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = parseFloat(amount);
    if (!isNaN(value) && value > 0) {
      onAddIncome(value);
      setAmount('');
    }
  };

  return (
    <motion.form className="income-form" onSubmit={handleSubmit} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <input
        type="number"
        placeholder="Enter income amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <motion.button type="submit" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        Add Income
      </motion.button>
    </motion.form>
  );
};

export default IncomeForm;
