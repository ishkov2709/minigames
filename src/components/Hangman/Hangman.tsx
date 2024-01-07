import { useSelector } from 'react-redux';
import GameWrapper from '../common/GameWrapper';
import { Box, Separator, Title } from './Hangman.styled';
import { RootState } from '../../store/store';
import { hangmanImg } from '../../img/hangman';
import data from './data.json';

export const Hangman = () => {
  const level = useSelector((state: RootState) => state.hangman.level);
  const mistakes = useSelector((state: RootState) => state.hangman.mistakes);

  return (
    <GameWrapper>
      <Title variant="h1">{level} lvl</Title>
      <Separator />
      <Box>
        <img src={hangmanImg[mistakes]} alt="hangman" />
      </Box>
    </GameWrapper>
  );
};

export default Hangman;
