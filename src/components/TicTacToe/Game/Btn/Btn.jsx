import * as Styled from './Btn.styled';

import { ImCross } from 'react-icons/im';
import { FiCircle } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectOpponentTick,
  selectPlayerTick,
} from '../../../../redux/ticTacToe/ticTacToeSlice';
import randomizer from '../../../../utils/randomizer';

const Btn = ({ id }) => {
  const dispatch = useDispatch();
  const variant = useSelector(state => state.variant);
  const exceptions = useSelector(state => state.exceptions);
  const opponentChoise = useSelector(state => state.opponentChoise);
  const endGame = useSelector(state => state.endGame);
  const ARRAY_FIELD = useSelector(state => state.ARRAY_FIELD);

  const handleTick = () => {
    dispatch(selectPlayerTick(id));
    if (!endGame) {
      const position = randomizer(ARRAY_FIELD, [...exceptions, id]);
      setTimeout(() => {
        dispatch(selectOpponentTick(position));
      }, 100);
    }
  };

  return (
    <Styled.FieldBtn
      type="button"
      disabled={exceptions.includes(id)}
      onClick={handleTick}
    >
      {exceptions.includes(id) &&
        variant === 'cross' &&
        opponentChoise.includes(id) && <FiCircle size={168} color="#2e972b" />}
      {exceptions.includes(id) &&
        variant === 'circle' &&
        opponentChoise.includes(id) && <ImCross size={168} color="#992323" />}
      {exceptions.includes(id) &&
        variant === 'cross' &&
        !opponentChoise.includes(id) && <ImCross size={168} color="#992323" />}
      {exceptions.includes(id) &&
        variant === 'circle' &&
        !opponentChoise.includes(id) && <FiCircle size={168} color="#2e972b" />}
    </Styled.FieldBtn>
  );
};

export default Btn;
