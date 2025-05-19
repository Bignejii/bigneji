import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:3000/products/${id}`)
      .then(response => {
        const product = response.data;
        setName(product.name);
        setPrice(product.price);
        setCategory(product.category);
        setImage(product.image);
      })
      .catch(err => {
        console.error('Failed to fetch product details:', err);
        setError('Failed to fetch product details.');
      });
  }, [id]);

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    if (!name || !price || !category) {
      setError('Name, price, and category are required.');
      return;
    }

    axios.put(`http://localhost:3000/products/${id}`, {
      name,
      price: parseFloat(price),
      category,
      image,
    })
      .then(() => {
        alert('Product updated successfully');
        navigate('/manage-products');
      })
      .catch(err => {
        console.error('Failed to update product:', err);
        setError('Failed to update product. Please try again.');
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-4 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Edit Product</h2>
        <form onSubmit={handleUpdateProduct} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price:</label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category:</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            >
              <option value="">Select a category</option>
              <option value="sports">Sports</option>
              <option value="rare">Rare</option>
              <option value="luxury">Luxury</option>
              <option value="bike">Bike</option>
            </select>
          </div>
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image URL:</label>
            <input
              type="text"
              id="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          {error && <p className="text-sm text-red-500">{error}</p>}
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;