import { BtnGroup, Message } from './PostGame.styled';
import lose from '../../../img/hangman/status/lose.png';
import win from '../../../img/hangman/status/win.png';
import Button from '../../common/Button';
import { Typography } from '@mui/material';
import { PiArrowBendUpLeftBold, PiArrowClockwiseBold } from 'react-icons/pi';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetLevel, toNextLevel } from '../../../store/hangman/hangmanSlice';

type PostGameProps = {
  gameStatus: 'win' | 'lose';
};

const PostGame = ({ gameStatus }: PostGameProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleBack = (): void => {
    navigate('/');
  };

  const handleRetry = (): void => {
    dispatch(resetLevel());
  };

  const handleNext = (): void => {
    dispatch(toNextLevel());
  };

  return (
    <>
      <Message>You {gameStatus}!</Message>
      {gameStatus === 'win' ? (
        <img src={win} alt="win" width={136} style={{ marginBottom: '20px' }} />
      ) : (
        <img
          src={lose}
          alt="lose"
          width={156}
          style={{ marginBottom: '60px' }}
        />
      )}

      <BtnGroup>
        <Button onClick={handleBack}>
          <Typography component="span">Back</Typography>
          <PiArrowBendUpLeftBold size={16} />
        </Button>
        {gameStatus === 'win' ? (
          <Button onClick={handleNext}>
            <Typography component="span">To Next Level</Typography>
            <IoIosArrowRoundForward size={16} />
          </Button>
        ) : (
          <Button onClick={handleRetry}>
            <Typography component="span">Retry</Typography>
            <PiArrowClockwiseBold
              className="retry-icon"
              size={16}
              style={{ transform: 'rotate(45deg)' }}
            />
          </Button>
        )}
      </BtnGroup>
    </>
  );
};

export default PostGame;
