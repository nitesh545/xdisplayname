import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName) { console.log("not submitted"); return; }
    setFullName(firstName + " " + lastName);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h5>First Name: </h5>
        <input onChange={(e) => setFirstName(e.target.value)}></input>
        <h5>Last Name: </h5>
        <input onChange={(e) => setLastName(e.target.value)}></input>
        <br />
        <br />
        <button type='submit'>Submit</button>
      </form>
      <h5>Full name: {fullName}</h5>
    </div>
  );
}

export default App;
