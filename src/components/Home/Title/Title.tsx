import { MouseEvent } from 'react';
import { MainTitle, Span } from './Title.styled';

type TitleProps = {
  title: string;
};

const Title = ({ title }: TitleProps) => {
  const handleClick = ({
    currentTarget,
  }: MouseEvent<HTMLSpanElement>): void => {
    currentTarget.style.animationName = 'jump';
    setTimeout(() => {
      currentTarget.style.animationName = 'none';
    }, 1000);
  };
  return (
    <>
      {title && (
        <MainTitle variant="h1" fontSize={52}>
          {title.split('').map((el, i) => (
            <Span key={i} onClick={handleClick}>
              {el}
            </Span>
          ))}
        </MainTitle>
      )}
    </>
  );
};

export default Title;
