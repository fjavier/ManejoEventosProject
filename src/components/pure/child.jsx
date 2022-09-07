import React, {useRef} from "react";

const Child = ({ sendAction, name, updateNameAction }) => {

  const messageInput = useRef("");
  const nameInput = useRef("");
  
  function pressButton() {
    console.log("Alerta por defecto");
  }

  const pressButtonParam = (param) => {
    console.log("Boton presionado :" + param);
  }

  function showMessage() {
    const message = messageInput.current.value;
    console.log("Message: "+message);
  }

  function sendNewName(event){
    event.preventDefault();
    updateNameAction(nameInput.current.value);
  }

  return (
    <div>
      <h1 onMouseOver={() => console.log("Mouse Over")}>Hola {name}</h1>
      <button onClick={() => console.log("Button 1 Pulsado")}>Boton 1</button>
      <button onClick={pressButton}>Boton 2</button>
      <button onClick={showMessage}>Boton 3</button>

      <input
        ref={messageInput}
        onFocus={() => console.log("Se invoco al focus")}
        onChange={(event) => console.log(event.target.value)}
        placeholder="Inserte texto"></input>
      <button
        onClick={()=>sendAction(messageInput.current.value)}>SendMessage from child to Father</button>

      <div style={{marginTop:"10px"}}>
        <form onSubmit={sendNewName}>
          <input ref={nameInput} placeholder="Name"></input>
          <button type="submit">Update name</button>
        </form>
      </div>
    </div>
  );
}

export default Child;