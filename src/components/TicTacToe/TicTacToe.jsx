import Intro from './Intro/';
import Game from './Game/';
import { useSelector } from 'react-redux';

const TicTacToe = () => {
  const variant = useSelector(state => state.variant);

  return (
    <>
      {!variant && <Intro />}
      {variant && <Game />}
    </>
  );
};

export default TicTacToe;
