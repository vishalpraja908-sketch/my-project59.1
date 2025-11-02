
import { Routes, Route } from "react-router-dom";
import CartList from './CartList';
import CartRow from './CartRow';
import CartPage from './CartPage';

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<CartPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
  
  );
}

export default App;
