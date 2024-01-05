import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import Home from './Home';
import TicTacToe from './TicTacToe';
import Hangman from './Hangman';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="tictactoe" element={<TicTacToe />} />
        <Route path="hangman" element={<Hangman />} />
      </Route>
    </Routes>
  );
}

export default App;
