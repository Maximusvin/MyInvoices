import { useLocation, useHistory } from 'react-router';
import { AppBar } from 'components';
import { NotFoundWrap, Button } from './NotFoundPage.style';
import { SectionWrap } from 'UI/SectionWrap';

const NotFoundPage = () => {
  const location = useLocation();
  const history = useHistory();

  const onGoMainPage = () => {
    history.push((location.pathname = '/MyInvoices/'));
  };

  return (
    <NotFoundWrap>
      <AppBar>Warning!</AppBar>
      <SectionWrap>
        <h2>404. Page not found</h2>
        <Button onClick={onGoMainPage}>Go to main page</Button>
      </SectionWrap>
    </NotFoundWrap>
  );
};

export default NotFoundPage;
