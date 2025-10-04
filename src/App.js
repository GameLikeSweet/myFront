import './App.scss';
import Header from './Header.js';
import Home from './Home.js';
import TechNote from './Tec/TechNote.js';
import Footer from './Footer.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/Default.scss';

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Header />
        <main className='main'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/techNote' element={<TechNote />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
