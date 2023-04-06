import React from 'react';
import { Link } from 'react-router-dom';
import logocat from './../imgs/cat.jpg'

export function NavigarionBar() {
    return(
            <nav className="flex justify-between items-center  px-5 shadow-md bg-blue-950  text-white">
                <div className="flex flex-col w-[100px] p-3 justify-center items-center">
                    <img src={logocat} alt="" className='max-h-[100px] rounded-full'/>
                    <h3>GitFinder</h3>
                </div>

                <span>
                    <Link to="/" className="mr-2">Домашняя</Link>
                    <Link to="/fav">Избранное</Link>
                </span>
            </nav>
        
    )
}