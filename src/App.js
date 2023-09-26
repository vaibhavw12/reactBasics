import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Cards from './components/Cards';
import Card from './components/Card';

function App() {

  const products = [
    {id: 1,item : 'Shoes',price : 10},
    {id: 2,item : 'Jeans',price : 22},
    {id: 3,item : 'Shorts',price : 19},
    {id: 4,item : 'Kurtas',price : 15},
  ]
  
  const inStocks = [
    {id: 1,item : 'Shoes',price : 10, 'stock' : 22},
    {id: 2,item : 'Jeans',price : 22, 'stock' : 8},
    {id: 3,item : 'Shorts',price : 19, 'stock' : 67},
    {id: 4,item : 'Kurtas',price : 15, 'stock' : 16},
  ]

  return (
    <div className="App">
      <Header></Header>
      <h2>use of props in react</h2>
      <div style={{display:'flex',justifyContent:'space-around'}}>
        {/* as we have defined component just once but we can use it multiple times */}
        {/* but the problem we face is their content is also similar ,so to tackel this we use props */}
        {/* props bascially pass info to components for rendering and we can pass different info to one components*/}

       <Cards title={'Jeans'} price={19.99}></Cards>
       <Cards price={15.55}></Cards> 
       {/* we forget to pass title then it will take by default title by props*/}
        {/* now, we will now just pass the parameters and it will get reflect in Cards components */}
        <Cards title={'Shirts'} price={16.89}></Cards>    
        <Cards title={'Shoes'} price={24.99}></Cards>
        <Cards title={'Watches'} price={22.89}></Cards>
        </div>
        <h3>By using arrays and maps</h3>
        {/* this can be done using arrays and mapping in effective way */}
        <div style={{display:'flex',justifyContent:'space-around'}}>
        {
          products.map((product,index)=>( //have to specify angular bracket() as we are already in {}
            // passing the key will identify each record uniquely and we can also pass index as a unique key but its not recommended
            <Cards key={product.id} title={product.item} price={product.price} ></Cards>
          ))
        }
       </div>
       {/* ------------------------------------------------------------- */}
       <h2>Use case of states and props(using arrays and maps) in react</h2>
      <div style={{display:'flex',justifyContent:'space-around'}}>
      {
        inStocks.map((product)=>(
          <Card key={product.id} title={product.item} price={product.price} stock={product.stock} ></Card>
        ))
      }
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
