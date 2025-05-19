import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3000/products/${id}`)
            .then(response => setProduct(response.data))
            .catch(error => console.error('Error fetching product details:', error));
    }, [id]);

    const handleBuy = () => {
        alert('Purchase successful!');
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="p-6 flex flex-col items-center mt-20">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-2xl">
                <img src={product.image} alt={product.name} className="w-full h-96 object-cover mt-4" />
                <div className="p-4 text-center">
                    <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                    <p className="text-lg text-gray-800 mb-4">Price: ${product.price}</p>
                    <button 
                        onClick={handleBuy} 
                        className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold text-lg">
                        Buy
                    </button>
                </div>
            </div>
        </div>
    );
}