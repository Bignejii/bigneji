import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const categoryImages = {
    sports: "https://www.bmwusa.com/content/dam/bmw/common/universal-inventory/2023/BMW-2023-CPO-Inventory-FMA-Desktop-v2.jpeg",
    rare: "https://www.ford.com/is/image/content/dam/na/ford/en_us/images/mustang/2025/dm/25_FRD_MST_61024_v2.tif?croppathe=21x9&wid=3840&fmt=webp",
    luxury: "https://hips.hearstapps.com/hmg-prod/images/2025-bentley-flying-spur-speed-115-6740a6ab57608.jpg?crop=1.00xw:0.750xh;0,0.185xh&resize=1200:*",
    bike: "https://www.detechtapp.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcategory_cover.24161537.png&w=3840&q=75",
    default: "https://www.ford.com/is/image/content/dam/na/ford/en_us/images/f-150/2025/dm/25_F150_90A9117_fade_v5.tif?croppathe=1_21x9&wid=3840&originN=0,0&layer=1&fmt=webp&src=/content/dam/na/ford/en_us/images/f-150/2025/dm/Ford_48Year_White_Stencil_Hz_v1.png&size=1000,1000&posN=-0.32,-0.28&scale=0.4"
};

export default function Getall({ category }) {
    const [data, setData] = useState([]);
    const [searchInput, setSearchInput] = useState("");

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

    const filteredData = data.filter(item =>
        item.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    const bannerImage = category ? categoryImages[category] || categoryImages.default : categoryImages.default;

    return (
        <>
            <div className="relative">
                <img 
                    src={bannerImage} 
                    alt="Category Banner" 
                    className="w-full h-64 object-cover"
                />
            </div>
            <div className="p-4">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md mb-4"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                {filteredData.map((item, i) => (
                    <Link to={`/products/${item.id}`} key={i} className="no-underline">
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h2 className="text-xl font-bold mb-2">{item.name}</h2>
                                <p className="text-gray-600 mb-1">{item.category}</p>
                                <p className="text-lg font-semibold text-gray-800 mb-2">Dealer Price: ${item.price}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
}
