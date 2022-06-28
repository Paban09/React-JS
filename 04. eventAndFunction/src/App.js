
import './App.css';
import User from './User';
import Users from './Users';

function App() {

  let data = "Masud Rana Paban";

  function buttonAlert() {
    alert('you have clicked the button');
  }

  function buttonMe() {
    data="Ayan";
    alert(data);
  }

  return (
    <div className="App">
      <h1>{data}</h1>
      <User />
      <header className="App-center">
        Learn React
      </header>
      <Users />
      <div>
        <button onClick={buttonMe}>ME</button>
        <button onClick={buttonAlert}>Click Me</button>
        <button onClick={() => alert("Hello Pabon")}>Click</button>

      </div>
    </div>
  );
}

export default App;
