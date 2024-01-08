import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const Btn = styled(Button)`
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
