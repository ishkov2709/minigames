import styled from '@emotion/styled';

export const FieldBtn = styled.button`
  background: #3b3b3b;

  width: 250px;
  height: 250px;

  border: none;

  border-bottom: 6px solid #a3ecf1;
  border-top: 6px solid #a3ecf1;

  &:nth-of-type(-1n + 3) {
    border-top: none;
  }

  &:nth-of-type(3n + 1) {
    border-right: 6px solid #a3ecf1;
  }

  &:nth-of-type(3n + 2) {
    border-left: 6px solid #a3ecf1;
    border-right: 6px solid #a3ecf1;
  }

  &:nth-of-type(3n) {
    border-left: 6px solid #a3ecf1;
  }

  &:nth-of-type(n + 7) {
    border-bottom: none;
  }
`;
