import '../styles/card.css'
import React from 'react'
import PropTypes from 'prop-types'
import {useNavigate} from 'react-router-dom';
export default function Card(props){
    const navigate = useNavigate();

    return(<div className="card__container">
        <img alt={props.name} src={props.img} className="card__image" onClick={()=>{navigate(`/character/${props.id}`)}}></img>
        <div className="card__name">{props.name}</div>
    </div>)
}
Card.propTypes = {
    id:PropTypes.number,
    name:PropTypes.string,
    img: PropTypes.string,
}