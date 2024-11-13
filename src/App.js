import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("Mehmet");
  const [age, setAge] = useState(29);
  const [friends, setFriends] = useState(["Ahmet", "Murat"]);
  const [address, setAddress] = useState({title:"Istanbul",zip:12345})

  return (
    <div className="App">
      <h1>Merhaba {name}!</h1>
      <h2>{age}</h2>
      <button onClick={() => setName("Ahmet")}>Change name</button>
      <button onClick={() => setAge(34)}>Change age</button>

      <hr />
      <br></br>

      <h2>Friends</h2>
      {friends.map((friend, index) => (
        <div key={index}>{friend}</div>
      ))}

      <button onClick={() => setFriends([...friends,"Ayşe"])}>Add new friend</button>
    
      <hr />
      <br></br>

      <h2>Address</h2>
      <div>{address.title} - {address.zip}</div>
    
      <button onClick={() => setAddress({...address,title:"Ankara"})}>Change Address</button>
    
    </div>
  );
}

export default App;
