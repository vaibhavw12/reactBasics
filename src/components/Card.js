import React,{useState} from 'react'

// by using state we can update the variable here, stockCount without reloading the page and this can be achived by using states


function Card(props) {

   let [stockCount, setStockCount] = useState(props.stock)    // setting up stockCount to initial no of stock

    function decrement(){
        // stockCount--;             
        // console.log(stockCount)
        // to update it we have to pass the value to setStockCount fun
        setStockCount(--stockCount)
    }
  return (
    <div style={{display:'flex',justifyContent:'center'}}>
        <div style={{border:'solid 2px black',width:'160px',height:'100px',backgroundColor:'grey',borderRadius:'4px'}}>

            {props.title}<br></br>
            ${props.price}<br></br>
            Stock : {stockCount}<br></br> {/* this variable will automatically reload after clicking on the button */}
            <button style={{marginTop:'6px'}} onClick={decrement}>Add to Cart</button>
        </div>
    </div>
  )
}

export default Card