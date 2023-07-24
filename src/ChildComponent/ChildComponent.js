import React from 'react'
import "./ChildComponent.css"
const ChildComponent = (props) => {
  return (
    
    <div className='ecom-card-div'>
        {/* <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv0zMF12P09ryySdzhJafoWpi_ztJwhoiVeg&usqp=CAU' className='.img-sty'/> */}
        <img src={props.image}/>
        <h2>Title : {props.title}</h2>
        <h3>Price : {props.price} </h3>
        <p> Category : {props.category}</p>
       
    </div>
  )
}

export default ChildComponent