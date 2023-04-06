import React,{useState }  from 'react'
import { IRepos } from "../modules/interfaces";
import { useActions } from '../Hookes/actions';
import { useAppSelector } from '../Hookes/redux';

export function ReposCard({repos}:{repos:IRepos}) {

      const {addFavoutite,removeFavoutite} = useActions()
      const {favourites} = useAppSelector(state => state.github)

   const [isFva,setIsFav] = useState(favourites.includes(repos.html_url))

    const addToFavourite =(event:React.MouseEvent<HTMLButtonElement>) =>{
        event.preventDefault()
        addFavoutite(repos.html_url)
        setIsFav(true)
    }
    const removeFromFavourite =(event:React.MouseEvent<HTMLButtonElement>) =>{
        event.preventDefault()
        removeFavoutite(repos.html_url)
        setIsFav(false)
    }
    return(
         
        <div className="border py-3 px-5 round mb-2 hover:shadow-md hover:bg-gray-100 transition-all">
            <a href={repos.html_url} target='_blanck'>
                <h2 className="text-lg font-bold">{repos.full_name}</h2>
                <p className=" text-sm mt-3">
                    Кличество веток: <span className='mr-2'>{repos.forks}</span> 
                    Количество просмотров: <span className='mr-2'>{repos.watchers}</span> 
                    Количество звёзд: <span className='mr-2'>{repos.stargazers_count}</span> 
                </p>
                <p className='text-sm font-thin mt-3'>{repos?.description}</p>

{ !isFva &&      <button className="py-1 px-4 bg-yellow-600 mr-5 rounded hover: shadow-md transition-all mt-3"
                    onClick={addToFavourite}
                > Добавить в избранное </button>}

{   isFva  &&    <button className="py-1 px-4 bg-yellow-600 rounded hover: shadow-md transition-all mt-3"
                    onClick={removeFromFavourite}
                > Удалить из избранного </button>}
            </a>

        </div>
    )
}