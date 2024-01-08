import styled from '@emotion/styled';
import { Typography } from '@mui/material';

export const PlayingField = styled.div`
  width: 750px;

  display: flex;
  flex-wrap: wrap;

  margin: 0 auto;
`;

export const WinText = styled(Typography)`
  display: block;

  margin: 0 auto 40px auto;

  color: #19ffff;

  font-family: 'Press Start 2P', cursive;

  animation-name: animationColor;
  animation-duration: 3000ms;
  animation-timing-function: linear;
  animation-iteration-count: infinite;

  text-align: center;

  text-transform: capitalize;
`;

export const BtnBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;
