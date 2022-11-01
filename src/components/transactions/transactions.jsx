import PropTypes from 'prop-types';
import {TransactionTable, TableHead, TableRow, TableHeadRow, TableBody, TableMinPart} from './Transactions.styled';

export const TransactionHistory = ({items}) => {
    return(
        <TransactionTable>
  <TableHead>
    <TableRow>
      <TableHeadRow>Type</TableHeadRow>
      <TableHeadRow>Amount</TableHeadRow>
      <TableHeadRow>Currency</TableHeadRow>
    </TableRow>
  </TableHead>

  <TableBody>
    {items.map( item => (
        <TableRow key = {item.id}>
        <TableMinPart>{item.type}</TableMinPart>
        <TableMinPart>{item.amount}</TableMinPart>
        <TableMinPart>{item.currency}</TableMinPart>
        </TableRow>
    ))}
  
   
  </TableBody>
</TransactionTable>
    );
};
TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
          })
    )
}