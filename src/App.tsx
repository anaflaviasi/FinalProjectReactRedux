import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import EventsCa from './pages/EventsCa';
import Cart from './pages/Cart';
import EventsUs from './pages/EventsUs';

function App(): JSX.Element {
  
  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/eventsca" element={<EventsCa />} />
          <Route path="/eventsus" element={<EventsUs />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
      </>
  )
}

export default App
