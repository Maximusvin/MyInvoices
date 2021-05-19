import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  position: relative;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  color: rgba(128, 128, 128, 1);
  border-left: 4px solid rgba(128, 128, 128, 0.4);

  ::before {
    display: block;
    position: absolute;
    height: 1px;
    width: 85%;
    content: '';
    background: rgba(128, 128, 128, 0.4);
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }
`;

export const Title = styled.h3``;
