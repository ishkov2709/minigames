import styled from '@emotion/styled';
import { Typography } from '@mui/material';

export const MainTitle = styled(Typography)`
  display: block;
  width: 512px;

  margin: 0 auto;

  color: #19ffff;

  font-family: 'Press Start 2P', cursive;

  animation-name: animationColor;
  animation-duration: 3000ms;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

export const Span = styled.span`
  position: relative;

  animation-duration: 1000ms;
  animation-timing-function: cubic-bezier(0.3, 2.4, 0.85, 2.5);
  animation-iteration-count: 1;

  cursor: pointer;
`;
