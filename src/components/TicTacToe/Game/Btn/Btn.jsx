import { FieldBtn } from './Btn.styled';
import { ImCross } from 'react-icons/im';
import { FiCircle } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import {
  makeWinner,
  selectPlayerTick,
  setTickStatus,
} from '../../../../store/ticTacToe/ticTacToeSlice';

const Btn = ({ id }) => {
  const dispatch = useDispatch();
  const variant = useSelector(state => state.variant);
  const exceptions = useSelector(state => state.exceptions);
  const opponentChoise = useSelector(state => state.opponentChoise);

  const handleTick = () => {
    dispatch(selectPlayerTick(id));
    dispatch(setTickStatus(true));
    dispatch(makeWinner(null));
  };

  return (
    <FieldBtn
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
    </FieldBtn>
  );
};

export default Btn;
