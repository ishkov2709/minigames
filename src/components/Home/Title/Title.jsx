import { MainTitle, Span } from './Title.styled';

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
        <MainTitle variant="h1" component="h1" fontSize={52}>
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
