import PropTypes from 'prop-types';
import { TableWrap, Thead, Tr, Th, Td } from './Table.style';

const Table = ({ invoices }) => {
  return (
    <TableWrap>
      <Thead>
        <Tr>
          <Th>Create</Th>
          <Th>No</Th>
          <Th>Supple</Th>
          <Th>Comment</Th>
        </Tr>
      </Thead>

      <tbody>
        {invoices.map(
          ({ _id, id, number, date_created, date_supplied, comment }) => (
            <Tr key={_id || id}>
              <Td>{date_created}</Td>
              <Td isActive={true}>INV-{number}</Td>
              <Td>{date_supplied}</Td>
              <Td>{comment}</Td>
            </Tr>
          ),
        )}
      </tbody>
    </TableWrap>
  );
};

Table.defaultProps = {
  invoices: [],
};

Table.propTypes = {
  invoices: PropTypes.array.isRequired,
};

export default Table;
