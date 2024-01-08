import { Section } from './GameWrappers.styled';
import { ReactNode } from 'react';
import { Container } from '@mui/material';

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
