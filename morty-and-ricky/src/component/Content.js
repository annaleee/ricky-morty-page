import Card from "./Card"
import { useEffect, useState } from "react";
import '../styles/content.css'
import Pagination from "./Pagination";
export default function Content(){
    const url = "https://rickandmortyapi.com/api/character";
    const [result, setResult] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [page,setPage] = useState(1);
    async function change(p){
        setIsLoading(true);
        fetch(`https://rickandmortyapi.com/api/character?page=${p}`).then(response =>{
            return response.json()
        }).then(data=>{
            setResult(data);
            setIsLoading(false);
            setPage(p)
        })
    }
    useEffect(()=>{
        setIsLoading(true);
        fetch(url).then(response =>{
            return response.json()
        }).then(data=>{
            setResult(data);
            setIsLoading(false);
        })
    },[])
    if(isLoading){
        return(
        <div>
            {"isLoading"}
        </div>)
    }
    return(
        <div >
            <div className="content--loaded">
                {result.results.map(i=>(<Card key={i.id} img={i.image} id={i.id} name={i.name}></Card>))}
            </div>
            <Pagination onChange={p=>change(p)} page={page} total={result.info.pages}/>
        </div>
    )
}