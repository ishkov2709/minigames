import { FieldBtn } from './Btn.styled';
import { ImCross } from 'react-icons/im';
import { FiCircle } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import {
  makeWinner,
  selectPlayerTick,
  setTickStatus,
} from '../../../../store/ticTacToe/ticTacToeSlice';
import { RootState } from '../../../../store/store';

type BtnProps = {
  id: number;
};

const Btn = ({ id }: BtnProps) => {
  const dispatch = useDispatch();
  const variant = useSelector((state: RootState) => state.ticTacToe.variant);
  const exceptions = useSelector(
    (state: RootState) => state.ticTacToe.exceptions
  );
  const opponentChoise = useSelector(
    (state: RootState) => state.ticTacToe.opponentChoise
  );

  const handleTick = (): void => {
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
