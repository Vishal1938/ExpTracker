import { Typography, styled, Box } from "@mui/material";

// Use a custom style for the BalanceText
const BalanceText = styled(Typography)`
  font-size: 28px; /* Increase the font size for emphasis */
  margin-bottom: 20px;
  color: #FF5733; /* Change to your desired text color (e.g., orange) */
  font-weight: bold; /* Add bold font-weight for better readability */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* Add a subtle text shadow */
`;

const Balance = ({ transactions }) => {
  const amount = transactions.map(transaction => transaction.amount);
  const total = amount.reduce((amount, item) => (amount += item), 0).toFixed(2);

  return (
    <Box>
      <BalanceText>Balance: ₹{total}</BalanceText>
    </Box>
  );
};

export default Balance;
