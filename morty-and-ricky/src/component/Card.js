import '../styles/card.css'
export default function Card({props}){
    return(<div>
        <img alt={props.name} src={props.img} className="card__image"></img>
        <div className="card__name">{props.name}</div>
    </div>)
}
Card.prototype = {
    id:Number,
    name:String,
    img: String,
}