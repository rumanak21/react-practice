import logo from './logo.svg';
import './App.css';

function App() {

  // const employees = ['Haoming', 'Rumana', 'Aibee', 'Irem', 'Edisa'];

  const products = [
    {name: 'Laptop', price: 50000},
    {name: 'Phone', price: 30000},
    {name: 'Tab', price: 40000},
    {name: 'Watch', price: 3000},


  ]

  return (

    <div className="App">

  {/* //   {
      employees.map(employee => <Person name={employee}></Person>)
    }

     <Person name="Haoming Wang" Job= "Advisor"></Person>
     <Person name="Rumana K." Job= "VA"></Person>
     <Person name="Aibee E." Job= "VA"></Person>
     <Person name="Irem" Job= "VA"></Person> */}

     {products.map(product =><Product name={product.name} price={product.price} ></Product>)}


     {/* <Product name="Laptop" price="50000" ></Product>
     <Product name="Phone" price="30000" ></Product>
     <Product name="Watch" price="3000" ></Product>
     <Product name="Tab" price="40000" ></Product> */}
     
     




    </div>

  );


}

function Product(props) {

  return (
    <div className="person">
      {/* <h1>Name: {props.name} </h1>
      <h2>Jobs: {props.Job}</h2> */}

      <h3>Name: {props.name} </h3>
      <h3>Price: {props.price} </h3>
    </div>
  );
}

export default App;
