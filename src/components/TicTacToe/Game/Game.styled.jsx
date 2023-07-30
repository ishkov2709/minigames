import styled from '@emotion/styled';
import { Button, Typography } from '@mui/material';

export const Section = styled.section`
  padding: 100px 0;
`;
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

export const BtnEnd = styled(Button)`
  display: flex;
  align-items: center;
  gap: 4px;

  background-color: #8512d1;

  &:hover {
    background-color: #6710da;
  }

  &:hover .retry-icon {
    animation-name: rotate;
    animation-duration: 350ms;
    animation-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);
    animation-iteration-count: 1;
  }
`;
