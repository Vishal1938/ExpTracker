import { useState } from 'react';
import { Typography, Box, TextField, Button, styled } from '@mui/material';

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #F7F7F7;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const StyledButton = styled(Button)`
  background: #445A6F;
  color: #fff;
  margin-top: 20px;
`;

const Title = styled(Typography)`
  font-size: 24px;
  margin-bottom: 20px;
`;

const InputField = styled(TextField)`
  margin-bottom: 10px; /* Add margin to space out the input fields */
`;

const NewTransaction = ({ addTransaction }) => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const newTransaction = () => {
    const transaction = {
      id: Math.floor(Math.random() * 1000000000),
      text: text,
      amount: +amount
    };
    addTransaction(transaction);
    setText('');
    setAmount('');
  };

  return (
    <Container>
      <Title variant="h5">New Transaction</Title>
      <InputField
        value={text}
        label="Enter Expense"
        onChange={(e) => setText(e.target.value)}
        variant="outlined"
        fullWidth
      />
      <InputField
        value={amount}
        label="Enter Amount"
        onChange={(e) => setAmount(e.target.value)}
        variant="outlined"
        fullWidth
      />
      <StyledButton variant="contained" onClick={newTransaction}>
        Add Transaction
      </StyledButton>
    </Container>
  );
};

export default NewTransaction;
