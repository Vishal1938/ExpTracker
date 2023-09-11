import { Divider, Typography, List, styled, Box } from "@mui/material";
import Transaction from "./Transaction";

const Component = styled(Box)`
  padding: 20px;
  background-color: #FFFFFF; /* Add a background color */
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* Add a subtle box shadow */
  & > h5 {
    font-size: 24px; /* Increase the font size for emphasis */
    margin-bottom: 10px;
  }
`;

const StyledDivider = styled(Divider)`
  margin: 10px 0; /* Add some margin above and below the divider */
`;

const Transactions = ({ transactions, deleteTransaction }) => {
  return (
    <Component>
      <Typography variant="h5">Transaction History</Typography>
      <StyledDivider />
      <List>
        {transactions.map((transaction) => {
          return (
            <Transaction
              transaction={transaction}
              deleteTransaction={deleteTransaction}
              key={transaction.id}
            />
          );
        })}
      </List>
    </Component>
  );
};

export default Transactions;
