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
  transition: all 0.2s linear;
`;

export const Tbody = styled.tbody`
  & ${Tr}:hover {
    background-color: rgba(211, 211, 211, 0.4);
  }
`;

export const Th = styled.th`
  padding: 15px 20px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Td = styled.td`
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 15px 20px;
  color: ${props => (props.isActive ? 'blue' : 'rgba(128, 128, 128, 1)')};

  :first-child {
    width: 15%;
  }

  :nth-child(2) {
    width: 15%;
  }

  :nth-child(3) {
    width: 15%;
  }

  /* :not(:last-child) {
    width: 23%;
  } */

  :last-child {
    width: 10%;
  }

  ::first-letter {
    text-transform: uppercase;
  }
`;

export const IconButton = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  color: rgba(128, 128, 128, 1);
  transition: color 0.2s linear;

  :not(:last-child) {
    margin-right: 5px;
  }

  :hover {
    color: #000;
  }
`;
