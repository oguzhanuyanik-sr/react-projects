import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalProvider } from './contexts/GlobalState';
import Header from './components/Header';
import Watchlist from './pages/Watchlist';
import Watched from './pages/Watched';
import Add from './pages/Add';

const App = () => {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Watchlist />} />
          <Route path='/add' element={<Add />} />
          <Route path='/watched' element={<Watched />} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
};

export default App;
