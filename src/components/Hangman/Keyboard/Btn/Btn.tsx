import { KeyBtn } from './Btn.styled';
import { MouseEvent, useRef } from 'react';
import data from '../../data.json';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
import { useHangmanState } from '../../Hangman';

type BtnProps = {
  letter: string;
};

const Btn = ({ letter }: BtnProps) => {
  const level = useSelector((state: RootState) => state.hangman.level);
  const { selectedLetters, setSelectedLetters } = useHangmanState();

  const handeKeydown = (e: MouseEvent<HTMLButtonElement>): void => {
    const letter: string = e.currentTarget.name;
    setSelectedLetters(prev => (prev !== null ? [...prev, letter] : [letter]));
  };
  const btnEl = useRef<HTMLButtonElement>(null);

  return (
    <KeyBtn
      ref={btnEl}
      type="button"
      name={letter}
      onClick={handeKeydown}
      letterstatus={`${data[level].word.includes(letter)}`}
      disabled={selectedLetters?.includes(letter)}
    >
      {letter}
    </KeyBtn>
  );
};

export default Btn;
