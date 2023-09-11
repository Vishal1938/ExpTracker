import { ListItemText, styled, ListItem, ListItemIcon } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const StyledListItem = styled(ListItem)`
  display: flex;
  align-items: center; /* Align content vertically in the center */
  margin-top: 10px;
  border: 1px solid #F6F6F6;
  background-color: ${({ color }) => (color === 'Green' ? '#4CAF50' : '#F44336')}; /* Change the background color based on the transaction */
  color: #fff;
  border-radius: 10px; /* Add rounded corners to the list item */
`;

const TransactionText = styled(ListItemText)`
  flex: 1; /* Take up remaining space in the list item */
`;

const DeleteButton = styled(DeleteIcon)`
  cursor: pointer;
`;

const Transaction = ({ transaction, deleteTransaction }) => {
  const sign = transaction.amount >= 0 ? '₹' : '-₹';
  const amount = sign + Math.abs(transaction.amount);
  const color = transaction.amount >= 0 ? 'Green' : 'Red';

  return (
    <StyledListItem color={color}>
      <ListItemIcon>
        <DeleteButton onClick={() => deleteTransaction(transaction.id)} />
      </ListItemIcon>
      <TransactionText primary={transaction.text} />
      <TransactionText primary={amount} />
    </StyledListItem>
  );
};

export default Transaction;
