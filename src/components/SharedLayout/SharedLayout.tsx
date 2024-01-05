import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

export default SharedLayout;
