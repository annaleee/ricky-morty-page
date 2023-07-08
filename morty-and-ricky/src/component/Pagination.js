import React, { useState, useEffect } from 'react';
import '../styles/pagination.css'
export default function Pagination(props){
    const [page,setPage] = useState(1);
    function change(i){
    if(!props.page){
      setPage(i);
    }
    if(props.onChange){
      props.onChange(i);
      console.log(i);
    }
  }
  useEffect(()=>{
    if(props.page){
      setPage(props.page);
    }
  },[props.page]
  )
  let renderItem = [];
  const firstNumber = [];
  const boundryCnt = 1;
  const siblingCnt = 1;
  for(var i=1;i<=boundryCnt&&i<=props.total;i++){
    firstNumber.push(i);
  }
  renderItem = renderItem.concat(firstNumber.map((i)=><PageButton key = {i+4} current = {page==i} click={()=>{change(i)}} pageNum={i}/>));
  const secondNumber = []
  if(page-siblingCnt-1<=boundryCnt){
    for(var i=boundryCnt+1;i<=page+siblingCnt&&i<=props.total;i++){
    secondNumber.push(i);
  }
  }else{
    renderItem.push(<OmitButton key={1}/>);
    for(var i=page-siblingCnt;i<=page+siblingCnt&&i<=props.total;i++){
    secondNumber.push(i);
  }
}
renderItem = renderItem.concat(secondNumber.map((i)=><PageButton key = {i+8} current = {page==i} click={()=>{change(i)}} pageNum={i}/>));
  const thirdNumber = []
  if(page+siblingCnt+1>=props.total+1-boundryCnt){
    for(var i=page+siblingCnt+1;i<=props.total;i++){
    thirdNumber.push(i);
  }
  }else{
    renderItem.push(<OmitButton key = {2}/>);
    for(var i=props.total+1-boundryCnt;i<=props.total;i++){
    thirdNumber.push(i);
  }
}
  renderItem = renderItem.concat(thirdNumber.map((i)=><PageButton key = {i+12} current = {page==i} click={()=>{change(i)}} pageNum={i}/>));
    const numbers = [];
    for(var i = 1; i <= props.total; i++){
        numbers.push(i);
    }
    return(
        <div className='pagi__container'>
            <PrevButton click={()=>{change(page-1)}}/>
            {renderItem.map(i=>i)}
            <NextButton click={()=>{change(page+1)}}/>
        </div>
    )
}

function PrevButton(props){
    return(
    <button aria-label="prev-button" type="button" className="pagi__btn" onClick={()=>{if(props.click){props.click()}}} >
    <img alt="left" src="left.svg" className='pagi__icon'></img>
    </button>)
}
function NextButton(props){
    return(
        <button aria-label="next-button" type="button" className='pagi__btn' onClick={()=>{if(props.click){props.click()}}} disabled={!!props.disabled}>
            <img alt="right" src="right.svg" className='pagi__icon'></img>
        </button>
    )
}
function PageButton(props){
    return(
        <button aria-label="page-button" className={`pagi__btn ${props.current?"pagi__btn--current":""}`} onClick={()=>{if(props.click){props.click()}}}>{props.pageNum}</button>
    )
}
function OmitButton(){
    return(
        <button aria-label="omit-page" className={`pagi__btn`}>...</button>
    )
}