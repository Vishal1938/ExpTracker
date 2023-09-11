import { useState } from 'react';
import { Typography, Box, styled } from '@mui/material';
import './App.css';

import Balance from './component/Balance';
import ExpenseCard from './component/ExpenseCard';
import Transactions from './component/Transactions';
import NewTransaction from './component/NewTransaction';

const Header = styled(Typography)`
margin: 20px 0;
color: #2196F3; /* Change to your desired text color */
font-size: 48px; /* Increase the font size for emphasis */
font-weight: bold; /* Add bold font-weight for better readability */
text-transform: uppercase;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* Add a subtle text shadow */
`;

const Component = styled(Box)`
background: #FFFFFF;
padding: 20px;
border-radius: 20px;
display: flex;
width: 800px;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); /* Add a subtle box shadow */

& > div {
  padding: 20px;
  width: 50%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Space items evenly vertically */
}
`;

function App(){
  const [transactions , setTransactions ]= useState([
    { id:1, text: 'Momos', amount: -20},
    { id:2, text: 'Salary' , amount: 300000},
    { id:3, text: 'Book' , amount: -500},
    { id:4, text: 'Bonus', amount: 1500},
  ]);

  const deleteTransaction = (id)=>{
    console.log(id);
    setTransactions(transactions.filter(transaction => transaction.id !== id));
    console.log(transactions);
  }

  const addTransaction = (transaction) => {
    setTransactions(transactions => [transaction, ...transactions]);
    console.log(transaction);
    console.log(transactions);
  }

  return (
    <div className='App'>
      <Header>Expense Tracker</Header>
      <Component>
        <Box>
          <Balance transactions={transactions}/>
          <ExpenseCard transactions={transactions}/>
          <NewTransaction addTransaction={addTransaction}/>
        </Box>
        <Box>
          <Transactions transactions={transactions} deleteTransaction={deleteTransaction}/>
        </Box>
      </Component>
    </div>
  );
}

export default App;