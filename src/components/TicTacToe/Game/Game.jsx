import * as Styled from './Game.styled';
import Btn from './Btn';
import { useEffect } from 'react';
import { PiArrowClockwiseBold, PiArrowBendUpLeftBold } from 'react-icons/pi';
import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  makeWinner,
  reset,
  retry,
} from '../../../redux/ticTacToe/ticTacToeSlice';
import {
  BsEmojiNeutral,
  BsEmojiSunglasses,
  BsEmojiFrown,
} from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const Game = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const variant = useSelector(state => state.variant);
  const ARRAY_FIELD = useSelector(state => state.ARRAY_FIELD);
  const exceptions = useSelector(state => state.exceptions);
  const playerChoise = useSelector(state => state.playerChoise);
  const opponentChoise = useSelector(state => state.opponentChoise);
  const endGame = useSelector(state => state.endGame);

  useEffect(() => {
    if (exceptions.length === 9 && !endGame) {
      dispatch(makeWinner('draw'));
    }
  }, [exceptions, endGame, dispatch]);

  useEffect(() => {
    if (
      playerChoise.includes(0) &&
      playerChoise.includes(1) &&
      playerChoise.includes(2)
    ) {
      dispatch(makeWinner(variant));
    }
    if (
      opponentChoise.includes(0) &&
      opponentChoise.includes(1) &&
      opponentChoise.includes(2)
    ) {
      dispatch(makeWinner(variant === 'cross' ? 'circle' : 'cross'));
    }

    if (
      playerChoise.includes(3) &&
      playerChoise.includes(4) &&
      playerChoise.includes(5)
    ) {
      dispatch(makeWinner(variant));
    }
    if (
      opponentChoise.includes(3) &&
      opponentChoise.includes(4) &&
      opponentChoise.includes(5)
    ) {
      dispatch(makeWinner(variant === 'cross' ? 'circle' : 'cross'));
    }

    if (
      playerChoise.includes(6) &&
      playerChoise.includes(7) &&
      playerChoise.includes(8)
    ) {
      dispatch(makeWinner(variant));
    }
    if (
      opponentChoise.includes(6) &&
      opponentChoise.includes(7) &&
      opponentChoise.includes(8)
    ) {
      dispatch(makeWinner(variant === 'cross' ? 'circle' : 'cross'));
    }
    if (
      playerChoise.includes(0) &&
      playerChoise.includes(4) &&
      playerChoise.includes(8)
    ) {
      dispatch(makeWinner(variant));
    }
    if (
      opponentChoise.includes(0) &&
      opponentChoise.includes(4) &&
      opponentChoise.includes(8)
    ) {
      dispatch(makeWinner(variant === 'cross' ? 'circle' : 'cross'));
    }
    if (
      playerChoise.includes(2) &&
      playerChoise.includes(4) &&
      playerChoise.includes(6)
    ) {
      dispatch(makeWinner(variant));
    }
    if (
      opponentChoise.includes(2) &&
      opponentChoise.includes(4) &&
      opponentChoise.includes(6)
    ) {
      dispatch(makeWinner(variant === 'cross' ? 'circle' : 'cross'));
    }
    if (
      playerChoise.includes(0) &&
      playerChoise.includes(3) &&
      playerChoise.includes(6)
    ) {
      dispatch(makeWinner(variant));
    }
    if (
      opponentChoise.includes(0) &&
      opponentChoise.includes(3) &&
      opponentChoise.includes(6)
    ) {
      dispatch(makeWinner(variant === 'cross' ? 'circle' : 'cross'));
    }
    if (
      playerChoise.includes(1) &&
      playerChoise.includes(4) &&
      playerChoise.includes(7)
    ) {
      dispatch(makeWinner(variant));
    }
    if (
      opponentChoise.includes(1) &&
      opponentChoise.includes(4) &&
      opponentChoise.includes(7)
    ) {
      dispatch(makeWinner(variant === 'cross' ? 'circle' : 'cross'));
    }
    if (
      playerChoise.includes(2) &&
      playerChoise.includes(5) &&
      playerChoise.includes(8)
    ) {
      dispatch(makeWinner(variant));
    }
    if (
      opponentChoise.includes(2) &&
      opponentChoise.includes(5) &&
      opponentChoise.includes(8)
    ) {
      dispatch(makeWinner(variant === 'cross' ? 'circle' : 'cross'));
    }
  }, [playerChoise, opponentChoise, variant, dispatch]);

  const hanldeRetry = () => {
    dispatch(retry());
  };

  const handleBack = () => {
    navigate('/');
    dispatch(reset());
  };

  if (!endGame)
    return (
      <Styled.Section>
        <Styled.PlayingField>
          {ARRAY_FIELD.map((el, i) => (
            <Btn key={i} id={i} />
          ))}
        </Styled.PlayingField>
      </Styled.Section>
    );

  if (endGame)
    return (
      <Styled.Section>
        <Styled.WinText variant="h2" component="h2">
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
        </Styled.WinText>

        <Styled.BtnBox>
          <Styled.BtnEnd variant="contained" type="button" onClick={handleBack}>
            <Typography variant="span" component="span">
              Back
            </Typography>
            <PiArrowBendUpLeftBold size={16} />
          </Styled.BtnEnd>
          <Styled.BtnEnd
            variant="contained"
            type="button"
            onClick={hanldeRetry}
          >
            <Typography variant="span" component="span">
              Retry
            </Typography>
            <PiArrowClockwiseBold
              className="retry-icon"
              size={16}
              style={{ transform: 'rotate(45deg)' }}
            />
          </Styled.BtnEnd>
        </Styled.BtnBox>
      </Styled.Section>
    );
};

export default Game;
