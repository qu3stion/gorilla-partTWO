//import useState
import { useState } from 'react'

//Receipt function
function Receipt(props){
  // console.log(props.receipt.person)
  //set props variables
  let order = props.receipt
  console.log(order)
  let paid = order.paid
  let person = order.person
  let food = order.order
  let main = food.main

  //set initial state to hold paid or not data
  const [satisfied, setSatisfied] = useState(paid)


  return (
    <div className="container">
      <h1>{food.main}</h1>
      <h1>{person}</h1>
      <p>{satisfied}</p>
      
    </div>
  )
}
export default Receipt
