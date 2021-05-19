import styled from 'styled-components';

export const TableWrap = styled.table`
  width: 100%;
  text-align: center;
  border-collapse: collapse;
`;

export const Thead = styled.thead`
  background-color: #ddd;
  border-radius: 5px 5px 0 0;
  color: rgba(128, 128, 128, 1);
`;

export const Tr = styled.tr`
  border-bottom: 1px solid rgba(128, 128, 128, 0.4);
`;

export const Th = styled.th`
  padding: 15px 0;
`;

export const Td = styled.td`
  padding: 15px 0;
  color: ${props => (props.isActive ? 'blue' : 'rgba(128, 128, 128, 1)')};
  width: 25%;

  ::first-letter {
    text-transform: uppercase;
  }
`;
