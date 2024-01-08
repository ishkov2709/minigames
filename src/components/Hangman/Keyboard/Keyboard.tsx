import { BorderWrapper, Wrapper } from './Keyboard.styled';
import keyboardLayout from './keyboardLayout';
import Btn from './Btn';

const Keyboard = () => {
  return (
    <Wrapper>
      <BorderWrapper>
        {Object.values(keyboardLayout).map(el => (
          <Btn key={el} letter={el} />
        ))}
      </BorderWrapper>
    </Wrapper>
  );
};

export default Keyboard;
