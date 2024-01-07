import styled from '@emotion/styled';
import { Typography } from '@mui/material';

export const Title = styled(Typography)`
  color: #ffffff;

  margin-bottom: 4px;

  font-weight: 400;
  font-size: 48px;
  text-align: center;
`;

export const Separator = styled.div`
  height: 12px;
  width: 516px;

  margin: 0 auto 34px auto;

  background-color: #ffe68c;

  border-radius: 62px;
`;

export const Box = styled.div`
  width: 750px;
  height: 750px;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 auto;
  padding: 24px 0 64px 0;

  background-color: #fbfbfb;
`;

export const Question = styled(Typography)`
  min-height: 28px;
`;

export const Keyboard = styled.div``;

export const KeyboardLine = styled.div``;
