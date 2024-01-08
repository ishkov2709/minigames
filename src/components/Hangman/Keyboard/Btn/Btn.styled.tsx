import styled from '@emotion/styled';
import { Button } from '@mui/material';

type KeyBtnProps = {
  name: string;
  letterstatus: string;
};

export const KeyBtn = styled(Button)<KeyBtnProps>`
  min-width: 48px;
  width: 48px;
  height: 48px;

  padding: 0;

  margin-left: ${props =>
    props.name === 'ф' ? 24 : props.name === 'я' ? 48 : 'none'}px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #ffffff;
  background-color: #512375;
  text-transform: uppercase;

  font-weight: 400;
  font-size: 24px;

  border: 4px solid #000000;

  &:hover {
    background-color: #350f52;
  }

  &:disabled {
    color: #ffffff;
    background-color: ${props =>
      props.letterstatus === 'true' ? '#0a9e0a' : '#ae2e2e'};
  }
`;
