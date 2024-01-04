import { BtnBox, BtnEnd, PlayingField, Section, WinText } from './Game.styled';
import Btn from './Btn';
import { useEffect } from 'react';
import { PiArrowClockwiseBold, PiArrowBendUpLeftBold } from 'react-icons/pi';
import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  makeWinner,
  reset,
  retry,
  selectOpponentTick,
  setTickStatus,
} from '../../../store/ticTacToe/ticTacToeSlice';
import {
  BsEmojiNeutral,
  BsEmojiSunglasses,
  BsEmojiFrown,
} from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import randomizer from '../../../utils/randomizer';

const Game = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const variant = useSelector(state => state.variant);
  const ARRAY_FIELD = useSelector(state => state.ARRAY_FIELD);
  const exceptions = useSelector(state => state.exceptions);
  const playerChoise = useSelector(state => state.playerChoise);
  const opponentChoise = useSelector(state => state.opponentChoise);
  const endGame = useSelector(state => state.endGame);
  const tickStatus = useSelector(state => state.tickStatus);

  useEffect(() => {
    if (
      (playerChoise.includes(0) &&
        playerChoise.includes(1) &&
        playerChoise.includes(2)) ||
      (playerChoise.includes(3) &&
        playerChoise.includes(4) &&
        playerChoise.includes(5)) ||
      (playerChoise.includes(6) &&
        playerChoise.includes(7) &&
        playerChoise.includes(8)) ||
      (playerChoise.includes(0) &&
        playerChoise.includes(4) &&
        playerChoise.includes(8)) ||
      (playerChoise.includes(2) &&
        playerChoise.includes(4) &&
        playerChoise.includes(6)) ||
      (playerChoise.includes(0) &&
        playerChoise.includes(3) &&
        playerChoise.includes(6)) ||
      (playerChoise.includes(1) &&
        playerChoise.includes(4) &&
        playerChoise.includes(7)) ||
      (playerChoise.includes(1) &&
        playerChoise.includes(4) &&
        playerChoise.includes(7)) ||
      (playerChoise.includes(2) &&
        playerChoise.includes(5) &&
        playerChoise.includes(8))
    ) {
      dispatch(makeWinner(variant));
    } else if (
      (opponentChoise.includes(0) &&
        opponentChoise.includes(1) &&
        opponentChoise.includes(2)) ||
      (opponentChoise.includes(3) &&
        opponentChoise.includes(4) &&
        opponentChoise.includes(5)) ||
      (opponentChoise.includes(6) &&
        opponentChoise.includes(7) &&
        opponentChoise.includes(8)) ||
      (opponentChoise.includes(0) &&
        opponentChoise.includes(4) &&
        opponentChoise.includes(8)) ||
      (opponentChoise.includes(2) &&
        opponentChoise.includes(4) &&
        opponentChoise.includes(6)) ||
      (opponentChoise.includes(0) &&
        opponentChoise.includes(3) &&
        opponentChoise.includes(6)) ||
      (opponentChoise.includes(1) &&
        opponentChoise.includes(4) &&
        opponentChoise.includes(7)) ||
      (opponentChoise.includes(2) &&
        opponentChoise.includes(5) &&
        opponentChoise.includes(8))
    ) {
      dispatch(makeWinner(variant === 'cross' ? 'circle' : 'cross'));
    } else {
      dispatch(makeWinner(exceptions.length === 9 ? 'draw' : 'none'));
    }
  }, [playerChoise, opponentChoise, variant, dispatch, exceptions]);

  useEffect(() => {
    if (tickStatus && endGame === 'none') {
      dispatch(setTickStatus(false));
      const position = randomizer(ARRAY_FIELD, exceptions);
      setTimeout(() => {
        dispatch(selectOpponentTick(position));
      }, 100);
    }
  }, [tickStatus, endGame, ARRAY_FIELD, dispatch, exceptions]);

  const hanldeRetry = () => {
    dispatch(retry());
  };

  const handleBack = () => {
    navigate('/');
    dispatch(reset());
  };

  if (endGame === 'none' || endGame === null)
    return (
      <Section>
        <PlayingField>
          {ARRAY_FIELD.map((_, i) => (
            <Btn key={i} id={i} />
          ))}
        </PlayingField>
      </Section>
    );

  if (endGame !== 'none' && endGame !== null)
    return (
      <Section>
        <WinText variant="h2" component="h2">
          {endGame === 'draw'
            ? 'draw...'
            : endGame === variant
            ? 'You Win!'
            : 'You Lose!'}
          {endGame === 'draw' ? (
            <BsEmojiNeutral />
          ) : endGame === variant ? (
            <BsEmojiSunglasses />
          ) : (
            <BsEmojiFrown />
          )}
        </WinText>

        <BtnBox>
          <BtnEnd variant="contained" type="button" onClick={handleBack}>
            <Typography variant="span" component="span">
              Back
            </Typography>
            <PiArrowBendUpLeftBold size={16} />
          </BtnEnd>
          <BtnEnd variant="contained" type="button" onClick={hanldeRetry}>
            <Typography variant="span" component="span">
              Retry
            </Typography>
            <PiArrowClockwiseBold
              className="retry-icon"
              size={16}
              style={{ transform: 'rotate(45deg)' }}
            />
          </BtnEnd>
        </BtnBox>
      </Section>
    );
};

export default Game;
