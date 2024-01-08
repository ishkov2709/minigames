import { useDispatch, useSelector } from 'react-redux';
import GameWrapper from '../common/GameWrapper';
import {
  Box,
  Letter,
  Question,
  Separator,
  Title,
  WordField,
} from './Hangman.styled';
import { RootState } from '../../store/store';
import { hangmanImg } from '../../img/hangman';
import data from './data.json';
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import Keyboard from './Keyboard';
import {
  resetLevel,
  setMistake,
  setWinStatus,
  toNextLevel,
} from '../../store/hangman/hangmanSlice';

export type HangmanContextProps = {
  selectedLetters: string[] | null;
  setSelectedLetters: Dispatch<SetStateAction<string[] | null>>;
};

export const hangmanContext = createContext<HangmanContextProps | undefined>(
  undefined
);

export const Hangman = () => {
  const level = useSelector((state: RootState) => state.hangman.level);
  const mistakes = useSelector((state: RootState) => state.hangman.mistakes);
  const gameStatus = useSelector(
    (state: RootState) => state.hangman.gameStatus
  );
  const [selectedLetters, setSelectedLetters] = useState<string[] | null>(null);
  const dispatch = useDispatch();

  // const handleKeydown = (e: KeyboardEvent): void => {
  //   console.log(e);
  // };

  // useEffect(() => {
  //   window.addEventListener('keydown', handleKeydown);

  //   return () => {
  //     window.removeEventListener('keydown', handleKeydown);
  //   };
  // });

  useEffect(() => {
    if (mistakes === 7 || selectedLetters === null) {
      dispatch(resetLevel());
      setSelectedLetters(null);
    }
  }, [mistakes, dispatch, selectedLetters]);

  useEffect(() => {
    if (
      data[level].word?.split('').every(el => selectedLetters?.includes(el))
    ) {
      setSelectedLetters(null);
      dispatch(setWinStatus());
    }
  }, [level, selectedLetters, dispatch]);

  useEffect(() => {
    if (selectedLetters !== null) {
      const lastSelectedLetter = selectedLetters[selectedLetters.length - 1];

      if (!data[level].word.includes(lastSelectedLetter)) {
        dispatch(setMistake());
      }
    }
  }, [selectedLetters, dispatch, level]);

  return (
    <hangmanContext.Provider value={{ selectedLetters, setSelectedLetters }}>
      <GameWrapper>
        <Title variant="h1">{level} lvl</Title>
        <Separator />
        <Box>
          <Question>{data[level].question}</Question>
          <img
            src={hangmanImg[mistakes]}
            alt="hangman"
            style={{ marginBottom: '30px' }}
            width={216}
            height={216}
          />
          <WordField>
            {data[level].word
              .toUpperCase()
              .split('')
              .map((el, i) => (
                <Letter key={i}>
                  {selectedLetters?.includes(el.toLowerCase()) ? el : '     '}
                </Letter>
              ))}
          </WordField>
        </Box>
        <Keyboard />
      </GameWrapper>
    </hangmanContext.Provider>
  );
};

export function useHangmanState() {
  const context = useContext(hangmanContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}

export default Hangman;
