import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { apiClient } from "../../axios/axios";

const About = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await apiClient.get(`/products/${id}`);
                console.log("Fetched Product:", res.data);
                setProduct(res.data.data);
            } catch (error) {
                console.error("Error fetching product details:", error);
            }
        };
        fetchProduct();
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container py-5 flex justify-between gap-5 items-center">
            <div>

                <img src={product.image} alt={product.name} className="w-[300px]" />
                <h1>{product.name}</h1>
                <p>Price: ${product.price}</p>
            </div>
            <div className="">
                <div className=" flex justify-between py-1 border-b border-dotted border-gray-300">
                    <span className="spec-key text-gray-800">Qo'llab-quvvatlash 4K UHD</span>
                    <span className="spec-value text-gray-500">Mavjud</span>
                </div>
                <div className=" flex justify-between py-1 border-b border-dotted border-gray-300">
                    <span className="spec-key text-gray-800">Qattiq disk</span>
                    <span className="spec-value text-gray-500">Mavjud, 1000 GB</span>
                </div>
                <div className=" flex justify-between py-1 border-b border-dotted border-gray-300">
                    <span className="spec-key text-gray-800">Protsessor chastotasi</span>
                    <span className="spec-value text-gray-500">3.50 GHz</span>
                </div>
                <div className=" flex justify-between py-1 border-b border-dotted border-gray-300">
                    <span className="spec-key text-gray-800">Operativ hotira</span>
                    <span className="spec-value text-gray-500">16384 Mb, GDDR6</span>
                </div>
                <div className=" flex justify-between py-1 border-b border-dotted border-gray-300">
                    <span className="spec-key text-gray-800">Diskovod DVD</span>
                    <span className="spec-value text-gray-500">Bor</span>
                </div>
                <div className=" flex justify-between py-1 border-b border-dotted border-gray-300">
                    <span className="spec-key text-gray-800">Komplektda kontroller</span>
                    <span className="spec-value text-gray-500">mavjud 1 dona</span>
                </div>
                <div className="view-more mt-2.5">
                    <a href="#" className="text-blue-500 hover:underline">Barcha xususiyatlarini ko'rish</a>
                </div>
            </div>
            <div className="price__wrapper border border-gray-300 rounded-xl w-[390px] h-[400px] flex flex-col items-center justify-center">
                <h2 className="price"></h2>
                <p className="title font-medium text-gray-600 text-sm leading-5 mb-2">Yetkazib berish to'g'risida ma'lumot:</p>
                <p className="title__2 font-medium text-black text-sm leading-5 mb-2">
                    Standart yetkazib berish <br />
                    Manzilga qarab 5 kundan 12 kungacha yetkazib beriladi
                </p>
                <div className="btn__wrapper flex flex-col gap-5">
                    <button className="btn bg-green-500 text-white w-[335px] h-[50px] flex items-center justify-center rounded-xl text-lg cursor-pointer">Sotib olish</button>
                    <button className="btn-2 border border-gray-500 text-black w-[335px] h-[50px] flex items-center justify-center rounded-xl text-lg bg-transparent cursor-pointer">Bir klikda sotib olish</button>
                </div>
            </div>
        </div>
    );
};

export default About;
