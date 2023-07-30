import * as Styled from './Title.styled';

const Title = ({ title }) => {
  const handleClick = ({ target }) => {
    target.style.animationName = 'jump';
    setTimeout(() => {
      target.style.animationName = 'none';
    }, 1000);
  };
  return (
    <>
      {title && (
        <Styled.MainTitle variant="h1" component="h1" fontSize={52}>
          {title.split('').map((el, i) => (
            <Styled.Span key={i} onClick={handleClick}>
              {el}
            </Styled.Span>
          ))}
        </Styled.MainTitle>
      )}
    </>
  );
};

export default Title;
