import React, { useEffect, useState } from 'react';
import IncomeForm from './components/IncomeForm';
import ExpenseForm from './components/ExpenseForm';
import BalanceDisplay from './components/BalanceDisplay';
import TransactionList from './components/TransactionList';
import Footer from './components/Footer';
import './App.css';
import { motion } from 'framer-motion';

const App = () => {
  const [income, setIncome] = useState(() => JSON.parse(localStorage.getItem('income')) || 0);
  const [expenses, setExpenses] = useState(() => JSON.parse(localStorage.getItem('expenses')) || []);

  useEffect(() => {
    localStorage.setItem('income', JSON.stringify(income));
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [income, expenses]);

  const handleAddIncome = (amount) => setIncome(prev => prev + amount);
  const handleAddExpense = (expense) => setExpenses(prev => [...prev, expense]);
  const handleReset = () => {
    setIncome(0);
    setExpenses([]);
    localStorage.clear();
  };

  return (
    <div className="app">
      <motion.h1 initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} className="main-heading">
        💸 Personal Finance Tracker
      </motion.h1>
      <IncomeForm onAddIncome={handleAddIncome} />
      <ExpenseForm onAddExpense={handleAddExpense} />
      <BalanceDisplay income={income} expenses={expenses} />
      <TransactionList expenses={expenses} />
      <motion.button className="reset-btn" onClick={handleReset} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        🔄 Reset All
      </motion.button>
      <Footer />
    </div>
  );
};

export default App;
