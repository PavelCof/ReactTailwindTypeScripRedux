import React from 'react'
import { IRepos } from "../modules/interfaces";

export function ReposCard({repos}:{repos:IRepos}) {
 
    return(
         
        <div className="border py-3 px-5 round mb-2 hover:shadow-md hover:bg-gray-100 transition-all">
            <h2 className="text-lg font-bold">{repos.full_name}</h2>
            <p className=" text-sm">
                Кличество веток: <span className='mr-2'>{repos.forks}</span> 
                Количество просмотров: <span className='mr-2'>{repos.watchers}</span> 
                Количество звёзд: <span className='mr-2'>{repos.stargazers_count}</span> 
            </p>
            <p className='text-sm font-thin'>{repos?.description}</p>
        </div>
    )
}