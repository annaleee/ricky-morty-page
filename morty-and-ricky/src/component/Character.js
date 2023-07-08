import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import '../styles/character.css';
import Loading from './Loading';
export default function Character(){
    const params = useParams();
    const [character, setCharacter] = useState({});
    const [loading, setLoading] = useState(true);
    const url = `https://rickandmortyapi.com/api/character/${params.id}`;
    useEffect(()=>{
        fetch(url).then(response=>response.json()).then(res=>{
            setCharacter(res);
            setLoading(false);
        })
    },[])
    if(loading){
        return(<Loading></Loading>)
    }
    return(
    <div>
        <div className="char__name">
            {character.name}
        </div>
        <img alt="name" src={character.image} className="char__img"></img>
        <div className="char-tag__container">
            <p className="char-tag__element">{character.status}</p>
            <p className="char-tag__element">{character.species}</p>
            <p className="char-tag__element">{character.gender}</p>
        </div>
    </div>)
}