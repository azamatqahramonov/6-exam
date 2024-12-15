import React, { useState, useEffect } from "react";
import { NavLink } from "react-router";
import { apiClient } from "../../axios/axios";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");

    const fetchProducts = async () => {
        try {
            const res = await apiClient.get("/products");
            console.log("Products:", res.data.data);
            setProducts(res.data.data || []);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container py-2">
            <h1 className="font-bold">Home</h1>
            <input
                type="text"
                placeholder="Search"
                className="border p-2 my-4 w-[300px] rounded"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <div className="grid grid-cols-4 gap-4">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="py-5">
                        <NavLink to={`/about/${product.id}`}>
                            <img
                                className="w-[270px] h-[300px] rounded-[12px]"
                                src={product.image}
                                alt={product.name}
                            />
                        </NavLink>
                        <h2>
                            <NavLink to={`/about/${product.id}`}>{product.name}</NavLink>
                        </h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
