import logo from './logo.svg';
import './App.css';

function App() {

  const employees = ['Haoming', 'Rumana', 'Aibee', 'Irem', 'Edisa'];

  return (





    <div className="App">

    {
      employees.map(employee => <Person name={employee}></Person>)
    }

      {/* <Person name="Haoming Wang" Job= "Advisor"></Person>
    <Person name="Rumana K." Job= "VA"></Person>
    <Person name="Aibee E." Job= "VA"></Person>
    <Person name="Irem" Job= "VA"></Person> */}

    </div>

  );
}

function Person(props) {

  return (
    <div className="person">
      <h1>Name: {props.name} </h1>
      <h2>Jobs: {props.Job}</h2>
    </div>
  );
}

export default App;
