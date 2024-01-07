import Game from './Game';
import Intro from './Intro';
import GameWrapper from '../common/GameWrapper';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';

const TicTacToe = () => {
  const variant = useSelector((state: RootState) => state.ticTacToe.variant);

  return (
    <GameWrapper>
      {!variant && <Intro />}
      {variant && <Game />}
    </GameWrapper>
  );
};

export default TicTacToe;
