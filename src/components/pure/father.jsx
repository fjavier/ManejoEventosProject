import React,{useState} from "react";
import Child from "./child"

const Father = () => {
  const [name, setName] = useState("Javier");
  
  const sendMessage = (message) => {
    console.log("Mensaje recibido: " + message);
  }

  const updateName = (newName)=>{
    setName(newName);    
  }
  
  return (
    <div>
      <h1>Father</h1>
      <Child name={name} 
        sendAction={sendMessage} 
        updateNameAction={updateName}></Child>
    </div>
  );
}

export default Father;