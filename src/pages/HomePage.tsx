import React, { useEffect, useState } from "react";
import { useLazyGetUserReposQuery, useSearchUsersQuery } from "../store/github/github.api";
import { useDebounces } from "../Hookes/debounts";
import { ReposCard } from "../components/ReposCard";

export function HomePage() {
        const [search ,setSearch]= useState("")

        const debounced = useDebounces(search)

        const {isError, isLoading,data}= useSearchUsersQuery(debounced,{
            skip:debounced.length<3,
            refetchOnFocus:true  //при возврате на страницу запрос отправляется заново focuse страницы для этого пишем в store setupListeners(store.dispatch) b ghjle,kbdjdfnm gfhfvtnh refetchOnFocus:true в githubapi
        })

        const [fetchRepos,{ isLoading:usLoad, data:UsRepos}] =  useLazyGetUserReposQuery()

        const [dropdown,setDropdown]=useState(false)
        useEffect(()=>{
            setDropdown(debounced.length>3 && data?.length!>0) 
        } ,[debounced,data] )
 
        const clickHandler = (username:string)=>{
            fetchRepos(username);
                
        }

        return(
            <div className="flex justify-center pt-10 mx-10 h-screen w-screen">
               {isError && <p className=" text-center text-red-700"></p> }

               <div className=" relative w-[575px]" >
                    <input type="text"  className=" border py-2 px-4 w-full h-[42px] mb-2" placeholder="Введите имя пользователя для поиска" onChange={e=>setSearch(e.target.value)} />
               
                     {/* здесь показываем вырианты ответа поиска */}
                    { dropdown &&   <ul className="absolute top-[42px] left-0 ring-0 max-h-[200px] w-[575px] overflow-y-scroll shadow-md p-[5px] bg-white">
                            {isLoading && <p>Данные не найдены</p>}
                            {data?.map(user=>(
                                <li
                                onClick={()=> clickHandler(user.login)}
                                className="py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer"
                                key={user.id}>{user.login}</li>
                            ))}
                        </ul>
                    }
                    <div className="container">
                        {usLoad && <div className=" text-center ">  Репозитории загружаются... </div>}
                         
                        {UsRepos?.map(repos=> <ReposCard repos={repos} key={repos.id}/>)} 
                        
                    </div>
               </div>

             
            </div>
        )
}