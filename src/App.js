import './App.css';
import { BrowserRouter as BrowserRouter, Routes, Route } from 'react-router-dom';
import './fonts/fonts.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/app/Header';
import Footer from './components/app/Footer';
import MainPage from './pages/MainPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/main" element={<MainPage />} />
          <Route path="/*" element={<div>404</div>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;