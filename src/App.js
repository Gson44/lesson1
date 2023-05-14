
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import About from './pages/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  
  return (
    <div className="App">
       <Header />
          <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Content />} />
                <Route path="/about" element={<About />} />
            </Routes>
          </BrowserRouter>
        <Footer />
    </div>
  );
}

export default App;

