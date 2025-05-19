import { Routes, Route, useSearchParams } from 'react-router-dom';
import Getall from './Components/Getall.jsx';
import NavScroll from './Components/NavbarComponent.jsx';
import Home from './Components/Home.jsx';
import ProductDetails from './Components/ProductDetails.jsx';
import Login from './Components/Login';
import ManageProducts from './Components/ManageProducts';
import AddProduct from './Components/AddProduct';
import EditProduct from './Components/EditProduct';
import './App.css';

function App() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');

  return (
    <>
      <NavScroll />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/products" element={<Getall category={category} />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/manage-products" element={<ManageProducts />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />
      </Routes>
    </>
  );
}

export default App;
