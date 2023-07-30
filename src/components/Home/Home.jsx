import { Link } from 'react-router-dom';
import * as Styled from './Home.styled';
import Title from './Title';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

const Home = () => {
  return (
    <>
      <Styled.Header>
        <Title title="Mini Games" />
      </Styled.Header>
      <section>
        <Styled.List>
          <li>
            <Link style={{ textDecoration: 'none' }} to="tictactoe">
              <Card
                sx={{
                  maxWidth: 280,
                  background:
                    'linear-gradient(0deg, rgba(253, 246, 230, 0.3), rgba(253, 246, 230, 0.3))',
                }}
              >
                <CardActionArea sx={{ padding: '20px 20px 0 20px' }}>
                  <CardMedia
                    component="img"
                    width="150"
                    image="https://m.media-amazon.com/images/I/411RqsooQ3L.png"
                    alt="Tic-Tac-Toe"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      margin="0"
                      fontSize={32}
                      sx={{
                        textAlign: 'center',
                        fontWeight: '500',
                        color: '#252525',
                      }}
                    >
                      Tic-Tac-Toe
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </li>
        </Styled.List>
      </section>
    </>
  );
};

export default Home;
