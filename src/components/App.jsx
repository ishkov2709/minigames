import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import Home from './Home';
import TicTacToe from './TicTacToe';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="tictactoe" element={<TicTacToe />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
