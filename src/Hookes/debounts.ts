import { useEffect, useState } from "react";

export function useDebounces (value:string,delay:number=300) {
    const [debounces,setDebounts]=useState(value)

    useEffect(()=>{
        const hendler =  setTimeout(() => { setDebounts(value)}, delay);
        return ()=>clearTimeout(hendler)  
    },[value,delay])
    return debounces
}