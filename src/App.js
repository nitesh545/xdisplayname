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
        <h1>Full Name Display</h1>
        <h5>First Name: </h5>
        <input onChange={(e) => setFirstName(e.target.value)} type='text'></input>
        <h5>Last Name: </h5>
        <input onChange={(e) => setLastName(e.target.value)} type='text'></input>
        <br />
        <br />
        <button type='submit'>Submit</button>
      </form>
      {fullName && <h5>Full Name: {fullName}</h5>}
    </div >
  );
}

export default App;
