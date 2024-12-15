import React from 'react';
import { NavLink } from 'react-router';


const Navbar = () => {
    return (
        <header className="bg-[#da002b]">
            <div className="container">

                <div className="flex items-center justify-between py-2">
                    <div>
                        <ul className="flex items-center gap-6">
                            <li>
                                <a
                                    className="border flex items-center bg-[#fff] text-[#da002b] p-1 rounded-[10px] transition-all duration-300 ease-in-out hover:border-[#fff] hover:bg-inherit hover:text-[#fff] hover:rounded-[10px]"
                                    href="#"
                                >
                                    0% Muddatli to'lov
                                </a>
                            </li>
                            <li>
                                <a
                                    className="border flex items-center border-[#fff] text-[#fff] p-1 rounded-[10px] transition-all duration-300 ease-in-out hover:bg-[#fff] hover:text-[#da002b]"
                                    href="#"
                                >
                                    Chegirmalar
                                </a>
                            </li>
                            <li>
                                <a
                                    className="border flex items-center bg-[#fff] text-[#da002b] p-1 rounded-[10px] transition-all duration-300 ease-in-out hover:border-[#fff] hover:bg-inherit hover:text-[#fff] hover:rounded-[10px]"
                                    href="#"
                                >
                                    Yutuqli o'yinlar
                                </a>
                            </li>
                            <li>
                                <a className="text-[#fff]" href="#">
                                    Sayt xaritasi
                                </a>
                            </li>
                        </ul>
                    </div>
                    <nav className="flex items-center gap-6">
                        <NavLink
                            to="/"
                            className="text-white text-lg font-semibold "
                        >
                            Home
                        </NavLink>

                    </nav>
                    <div className="flex items-center gap-6">
                        <ul>
                            <li>
                                <a
                                    className="text-white text-[20px] font-bold leading-[23px] whitespace-nowrap transition-all duration-300 ease-in"
                                    href="#"
                                >
                                    +998 (71) 202 202 1
                                </a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <a
                                    className="border flex items-center border-[#fff] text-[#fff] p-1 rounded-[10px] transition-all duration-300 ease-in-out hover:bg-[#fff] hover:text-[#da002b]"
                                    href="#"
                                >
                                    olcha da soting
                                </a>
                            </li>
                        </ul>
                        <ul className="flex items-center gap-4 text-[#ffffffb3]">
                            <li>
                                <a href="#">Узб</a>
                            </li>
                            <li>
                                <a className="text-[#fff]" href="#">
                                    O'z
                                </a>
                            </li>
                            <li>
                                <a href="#">Рус</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
