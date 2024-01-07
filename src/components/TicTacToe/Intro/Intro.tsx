import { ImCross } from 'react-icons/im';
import { FiCircle } from 'react-icons/fi';
import { Btn, Wrapper } from './Intro.styled';
import { useDispatch } from 'react-redux';
import { selectVariant } from '../../../store/ticTacToe/ticTacToeSlice';
import { MouseEvent } from 'react';

const Intro = () => {
  const dispatch = useDispatch();

  const handleVariant = ({
    currentTarget,
  }: MouseEvent<HTMLButtonElement>): void => {
    dispatch(selectVariant(currentTarget.name));
  };

  return (
    <>
      <Wrapper>
        <Btn type="button" name="cross" onClick={handleVariant}>
          <ImCross
            size={120}
            color="#992323"
            className="btn-icon"
            style={{
              transition: 'transform 250ms linear',
            }}
          />
        </Btn>
        <Btn type="button" name="circle" onClick={handleVariant}>
          <FiCircle
            size={120}
            color="#2e972b"
            className="btn-icon"
            style={{
              transition: 'transform 250ms linear',
            }}
          />
        </Btn>
      </Wrapper>
    </>
  );
};
export default Intro;
