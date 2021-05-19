import PropTypes from 'prop-types';
import { Header, Title } from './AppBar.style';

const AppBar = ({ children }) => {
  return <Header>{children && <Title>{children}</Title>}</Header>;
};

AppBar.defaultProps = {
  children: '',
};

AppBar.propTypes = {
  children: PropTypes.string.isRequired,
};

export default AppBar;
