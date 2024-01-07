import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
`;

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: calc(100% / 2);
  height: 400px;

  background: #464646;

  border: none;

  &:nth-of-type(1) {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    border-right: 1px solid #9e9e9e;
  }

  &:nth-of-type(2) {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    border-left: 1px solid #9e9e9e;
  }

  &:hover .btn-icon {
    transform: scale(1.2);

    transition: transform 250ms linear;
  }
`;
