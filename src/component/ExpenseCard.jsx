import { Card, CardContent, styled, Typography, Box } from '@mui/material';

const Container = styled(Box)`
  display: flex;
  justify-content: space-between;
  gap: 20px; /* Add some space between the cards */
`;

const CardWrapper = styled(Card)`
  flex: 1;
  padding: 20px; /* Increase padding for better spacing */
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* Add a subtle box shadow */
`;

const Title = styled(Typography)`
  font-size: 20px; /* Increase the font size for emphasis */
  margin-bottom: 10px;
`;

const Amount = styled(Typography)`
  font-size: 24px; /* Increase the font size for emphasis */
  color: ${props => props.color};
`;

const ExpenseCard = ({ transactions }) => {
  const amount = transactions.map(transaction => transaction.amount);
  const income = amount.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
  const expense = (amount.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);

  return (
    <Container>
      <CardWrapper>
        <CardContent>
          <Title>Income</Title>
          <Amount color="green">₹{income}</Amount>
        </CardContent>
      </CardWrapper>
      <CardWrapper>
        <CardContent>
          <Title>Expense</Title>
          <Amount color="red">₹{expense}</Amount>
        </CardContent>
      </CardWrapper>
    </Container>
  );
};

export default ExpenseCard;
