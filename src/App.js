import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import './App.css';
import Navbar from './components/navbar/Navbar';


function App() {
  return (
    <Router>
      <Navbar/>
       <Routes>
        <Route path="/" element={<ProductList/>} />
        <Route path="/products/:id" element={<ProductDetail/>} />
      </Routes>
    </Router>
  );
}

export default App;
