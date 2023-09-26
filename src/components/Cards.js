import React from 'react'
import propTypes from 'prop-types'        // it bascially check the variable type of props 

function Cards(props) {
// function Cards({title, price}) {   -->> can also be written as this knows as props destructuring

   // console.log(props)
  return (
    <div style={{display:'flex',justifyContent:'center'}}>
        <div style={{border:'solid 2px black',width:'160px',height:'100px',backgroundColor:'grey',
    borderRadius:'4px'}}>
            {/* Cards<br></br>
            $9.89<br></br> */}
            {/* instead of this we will pass props object */}
            {props.title}<br></br>
            ${props.price}<br></br>
            <button style={{marginTop:'20px'}}>Add to Cart</button>
        </div>
    </div>
  )
}

// we are setting datatypes of props to take if we by mistake supplied string instead of integer it will warning 
Cards.propTypes = {
    title: propTypes.string,
    price: propTypes.number.isRequired     // it is mandatory to pass price ,if forgets it will show a warning
}

// incase we forget to pass any values to props.title then by default it will show this
Cards.defaultProps = {
    title: 'basics'
}

export default Cards