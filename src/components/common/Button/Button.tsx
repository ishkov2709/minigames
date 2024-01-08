import { ReactNode } from 'react';
import { Btn } from './Button.styled';

type ButtonProps = {
  onClick: () => void;
  children: ReactNode;
};

export const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <Btn variant="contained" type="button" onClick={onClick}>
      {children}
    </Btn>
  );
};

export default Button;
