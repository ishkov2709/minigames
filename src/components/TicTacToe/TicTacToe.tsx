import Intro from './Intro';
import Game from './Game';
import { useSelector } from 'react-redux';
import { InitialStateType } from '../../store/ticTacToe/initialState';

const TicTacToe = () => {
  const variant = useSelector((state: InitialStateType) => state.variant);

  return (
    <>
      {!variant && <Intro />}
      {variant && <Game />}
    </>
  );
};

export default TicTacToe;
