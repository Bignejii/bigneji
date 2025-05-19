import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3000/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Failed to fetch products:', error));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/products/${id}`)
      .then(() => {
        setProducts(products.filter(product => product.id !== id));
        alert('Product deleted successfully');
      })
      .catch(error => console.error('Failed to delete product:', error));
  };

  const handleEdit = (id) => {
    navigate(`/edit-product/${id}`); 
  };

  return (
    <div className="p-4">
        <div className="mt-20">
      <h2 className="text-2xl font-bold mb-4">Manage Products</h2>
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Category</th>
              <th className="py-2 px-4 border-b">Price</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td className="py-2 px-4 border-b">{product.name}</td>
                <td className="py-2 px-4 border-b">{product.category}</td>
                <td className="py-2 px-4 border-b">${product.price}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    onClick={() => handleEdit(product.id)}
                    className="px-2 py-1 text-white bg-blue-500 rounded hover:bg-blue-600 mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="px-2 py-1 text-white bg-red-500 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
        onClick={() => navigate('/add-product')}
        className="mt-4 px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
      >
        Add Product
      </button>
      </div>
    </div>
  );
};

export default ManageProducts;