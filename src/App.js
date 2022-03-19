import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  // const employees = ['Haoming', 'Rumana', 'Aibee', 'Irem', 'Edisa'];

  // const products = [
  //   {name: 'Laptop', price: 50000},
  //   {name: 'Phone', price: 30000},
  //   {name: 'Tab', price: 40000},
  //   {name: 'Watch', price: 3000},


  // ]

  return (

    <div className="App">

      {/* //   {
      employees.map(employee => <Person name={employee}></Person>)
    }

     <Person name="Haoming Wang" Job= "Advisor"></Person>
     <Person name="Rumana K." Job= "VA"></Person>
     <Person name="Aibee E." Job= "VA"></Person>
     <Person name="Irem" Job= "VA"></Person> */}

      {/* {products.map(product =><Product name={product.name} price={product.price} ></Product>)} */}


      {/* <Product name="Laptop" price="50000" ></Product>
     <Product name="Phone" price="30000" ></Product>
     <Product name="Watch" price="3000" ></Product>
     <Product name="Tab" price="40000" ></Product> */}


      {/* <Counter></Counter> */}

      <Externalusers></Externalusers>



    </div>

  );


}

// =============================
// -----------Counter----------
// =============================

// function Counter() {
//   const [count, setCount] = useState(0)
//   const increaseCount = () => {setCount(count+1);}
//   const decreaseCount = () => {setCount(count-1);}




// const increaseCount = () => {
//  const newCount = count+1;
//   setCount(newCount);

function Externalusers() {
  const [users, setUsers] = useState([]);
  // useEffect(() => {}, []);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, []);
  return (
    <div>
      <h2>External Users</h2>
      <p>Total Users: {users.length}</p>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>

  )
}

function User(props) {

  return (
    <div style={{border: '2px solid green', margin: '10px'}}>
      <h2>Name: {props.name} </h2>
      <h3>Email: {props.email}</h3>

    </div>


  )

}



//   return (
//     <div className="person">
//       {/* <h1>Name: {props.name} </h1>
//       <h2>Jobs: {props.Job}</h2> */}

//       {/* <h3>Name: {props.name} </h3>
//       <h3>Price: {props.price} </h3> */}
//     </div>
// =============================
// -----------Counter----------
// =============================
//     <div>
//       <h1>Count: {count} </h1>
//       <button onClick={increaseCount} >Increase</button>
//       <button onClick={decreaseCount} >Decrease</button>
//     </div>
//   );


export default App;
