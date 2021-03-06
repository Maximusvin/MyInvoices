import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const InvoicesWrap = styled.section`
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const Button = styled(Link)`
  padding: 10px 25px;
  border-radius: 5px;
  color: #fff;
  font-weight: 600;
  background-color: rgb(11, 11, 255);
  cursor: pointer;
`;
