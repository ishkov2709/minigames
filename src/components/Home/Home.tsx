import { Link } from 'react-router-dom';
import Title from './Title';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { Header, List } from './Home.styled';

const Home = () => {
  return (
    <>
      <Header>
        <Title title="Mini Games" />
      </Header>
      <main>
        <List>
          <li style={{ outline: '1px solid tomato' }}>
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
          <li style={{ outline: '1px solid tomato' }}>
            <Link style={{ textDecoration: 'none' }} to="hangman">
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
                    image="https://cdn-icons-png.flaticon.com/256/3401/3401289.png"
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
                      Hangman
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </li>
        </List>
      </main>
    </>
  );
};

export default Home;
