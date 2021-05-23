import PropTypes from 'prop-types';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import {
  TableWrap,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  IconButton,
  IconRoute,
} from './Table.style';
import { deleteInvoice } from 'services/invoices-api';

const Table = ({ invoices }) => {
  const handleDelete = id => {
    deleteInvoice(id);
  };

  return (
    <TableWrap>
      <Thead>
        <Tr>
          <Th>Create</Th>
          <Th>No</Th>
          <Th>Supple</Th>
          <Th>Comment</Th>
          <Th>Edit</Th>
        </Tr>
      </Thead>

      <Tbody>
        {invoices.map(
          ({ _id, id, number, date_created, date_supplied, comment }) => (
            <Tr key={_id || id}>
              <Td>{date_created}</Td>
              <Td isActive={true}>{`INV-${number}`}</Td>
              <Td>{date_supplied}</Td>
              <Td>{comment}</Td>
              <Td>
                <IconRoute to={`/edit-invoice/${_id || id}`}>
                  <FaEdit />
                </IconRoute>
                <IconButton onClick={() => handleDelete(_id || id)}>
                  <MdDelete />
                </IconButton>
              </Td>
            </Tr>
          ),
        )}
      </Tbody>
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
