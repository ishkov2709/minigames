import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 908px;

  margin: 0 auto;
  padding: 18px;

  background-color: #ffffff4d;
`;

export const BorderWrapper = styled.div`
  position: relative;

  display: flex;
  flex-wrap: wrap;
  column-gap: 24px;
  row-gap: 8px;

  padding: 16px 10px;

  border-top: 6px solid #000000;
  border-bottom: 6px solid #000000;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -6px;

    transform: translateY(-50%);

    display: block;
    width: 6px;
    height: 178px;

    background-color: #000000;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: -6px;

    transform: translateY(-50%);

    display: block;
    width: 6px;
    height: 178px;

    background-color: #000000;
  }
`;
