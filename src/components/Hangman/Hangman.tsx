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
import { hangmanImg } from '../../img/hangman/mistakes';
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
  setLoseStatus,
  setMistake,
  setWinStatus,
} from '../../store/hangman/hangmanSlice';
import PostGame from './PostGame';
import keyboardLayout from './Keyboard/keyboardLayout';

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

  const handleKeydown = (e: KeyboardEvent): void => {
    const code: string = e.code;
    const letter = keyboardLayout[code as keyof typeof keyboardLayout];
    if (letter !== undefined && gameStatus === 'start') {
      setSelectedLetters(prev =>
        prev !== null ? [...prev, letter] : [letter]
      );
    }
  };

  useEffect(() => {
    window.removeEventListener('keydown', handleKeydown);
    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  });

  useEffect(() => {
    if (mistakes === 7) {
      setSelectedLetters(null);
      dispatch(setLoseStatus());
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
          {gameStatus === 'start' && (
            <>
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
                      {selectedLetters?.includes(el.toLowerCase())
                        ? el
                        : '     '}
                    </Letter>
                  ))}
              </WordField>
            </>
          )}

          {gameStatus !== 'start' && <PostGame gameStatus={gameStatus} />}
        </Box>
        {gameStatus === 'start' && <Keyboard />}
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
