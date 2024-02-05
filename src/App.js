import './App.css';
import UserCart from './components/userCard';
import UserPost from './components/userPost';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<UserCart />} />
        <Route path="/post/" element={<UserPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
