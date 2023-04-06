import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IRepos, ServerResponse, IUser } from "../../modules/interfaces";



export const githubApi = createApi({
    reducerPath:"github/api",
    baseQuery:fetchBaseQuery({
        baseUrl:"https://api.github.com/"
    }),
    refetchOnFocus:true,
    endpoints:build=>({
        searchUsers:build.query<IUser[],string>({ // < что получаем от сервера   ,   какой параметр получаем для отправки запроса он будет указываться в query   > 
            query:(search:string)=>({
                url:'search/users',
                params:{
                    q:search,
                    per_page:10
                }
            }),
        transformResponse:(response:ServerResponse<IUser>)=>response.items
        }),
        getUserRepos:build.query<IRepos[],string>({ // < что получаем от сервера   ,   какой параметр получаем для отправки запроса он будет указываться в query   > 
            query:(username:string)=>({
                url:`users/${username}/repos`,

            }),
       // transformResponse:(response:ServerResponse<IUser>)=>response.items
        }),


        //для отправки данных на сервер
       /// createUser:build.mutation<any,void>({query:()=>{}})
       
    })
})

export const {useSearchUsersQuery,useLazyGetUserReposQuery} =githubApi //useLazy - отложенный запрос применяется полько при обращении к нему