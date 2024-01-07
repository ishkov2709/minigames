import { Container } from '@mui/material';
import { ReactNode } from 'react';
import { Section } from './GameWrappers.styled';

type GameWrapperProps = {
  children: ReactNode;
};

const GameWrapper = ({ children }: GameWrapperProps) => {
  return (
    <main>
      <Section>
        <Container>{children}</Container>
      </Section>
    </main>
  );
};

export default GameWrapper;
