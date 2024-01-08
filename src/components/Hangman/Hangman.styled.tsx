import styled from '@emotion/styled';
import { Typography } from '@mui/material';

export const Title = styled(Typography)`
  color: #ffffff;

  margin-bottom: 18px;

  font-weight: 400;
  font-size: 36px;
  text-align: center;
`;

export const Separator = styled.div`
  height: 6px;
  width: 400px;

  margin: 0 auto 12px auto;

  background-color: #ffe68c;

  border-radius: 60px;
`;

export const Box = styled.div`
  width: 400px;
  height: 400px;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 auto 20px auto;
  padding: 24px 12px;

  background-color: #fbfbfb;
`;

export const Question = styled(Typography)`
  min-height: 28px;

  margin-bottom: 24px;

  font-size: 16px;
`;

export const WordField = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

export const Letter = styled(Typography)`
  display: block;
  min-height: 54px;
  width: 34px;

  font-size: 32px;
  text-align: center;

  border-bottom: 6px solid #000000;
`;
