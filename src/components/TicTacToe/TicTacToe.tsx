import Intro from './Intro';
import Game from './Game';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const TicTacToe = () => {
  const variant = useSelector((state: RootState) => state.variant);

  return (
    <>
      {!variant && <Intro />}
      {variant && <Game />}
    </>
  );
};

export default TicTacToe;
