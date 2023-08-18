import { Link } from 'react-router-dom';
import React, { useState } from "react";

export default function Navigation(props) {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="absolute  z-40 top-0 right-0 bg-white p-3 shadow-md">
        {isOpen ? (
            <button className='m-2 absolute right-3 font-bold ' onClick={() => setIsOpen(!isOpen)}>
                X
            </button>
            ) : (
            <button className='m-2 right-0' onClick={() => setIsOpen(!isOpen)}>
                ☰
            </button>
        )}
       
        {isOpen && (
          <ul className='p-10 '>
            <li className="mb-2">
              <Link to="/" className="text-blue-500 hover:underline">Home</Link>
            </li>
            <li className="mb-2">
              <Link to="/cabrera" className="text-blue-500 hover:underline">Cabrera</Link>
            </li>
            <li className="mb-2">
              <Link to="/cabrerabaño" className="text-blue-500 hover:underline">Cabrera Baño</Link>
            </li>
            <li className="mb-2">
              <Link to="/conesa" className="text-blue-500 hover:underline">Conesa</Link>
            </li>
            <li className="mb-2">
              <Link to="/cramer" className="text-blue-500 hover:underline">Cramer</Link>
            </li>
            <li className="mb-2">
              <Link to="/goyena" className="text-blue-500 hover:underline">Goyena</Link>
            </li>
            <li className="mb-2">
              <Link to="/pinzon" className="text-blue-500 hover:underline">Pinzón</Link>
            </li>
            <li className="mb-2">
              <Link to="/flashero" className="text-blue-500 hover:underline">Flashero</Link>
            </li>
          </ul>
        )}
      </div>
    );
  }

