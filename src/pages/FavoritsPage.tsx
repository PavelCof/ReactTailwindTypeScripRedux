import React from "react";
import { useAppSelector } from "../Hookes/redux";

export function FavoritsPage() {
        const {favourites} =useAppSelector(state =>state.github)

        if(favourites.length === 0) return <p className="test-center">Пусто</p>

        return(
                <div className="container m-auto h-full relative">
                    <h2 className=" container text-center mt-3 mb-3 " > Избранное </h2>
                    <ul className="container m-auto border h-full">
                    { favourites.map(f => (
                            <li key={f}
                            className="py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer"
                            >
                                <a href={f}>{f}</a>
                            </li>
                        ))}

                    </ul>
                </div>

        )
}