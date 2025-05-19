import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Getall({ category }) {
    const [data, setData] = useState([]);

    const showdata = () => {
        const url = category 
            ? `http://localhost:3000/products?category=${category}` 
            : 'http://localhost:3000/products';

        axios.get(url)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };

    useEffect(() => {
        showdata();
    }, [category]);


  return (
    <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
        {data.map((item, i) => (
            <div key={i} className="bg-white shadow-xl/30 rounded-lg overflow-hidden p-4 transition-transform hover:scale-105 duration-300">
                <img src={item.image} alt={item.name} className="size-48 shadow-xl rounded-md" />
                <h2 className="text-2xl font-medium">{item.name}</h2>
                <p className="text-lg text-green-600 font-medium mb-2">${item.price}</p>
                <p className="text-gray-600">Category: {item.category}</p>
            </div>
        ))}
    </div>
  );
}
