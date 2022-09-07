import React from "react";

const Child = () => {
  function pulsarButton() {

  }

  function pressButton() {
    console.log("Alerta por defecto");
  }

  const pressButtonParam = (param) => {
    console.log("Boton presionado :" + param);
  }

  return (
    <div>
      <h1 onMouseOver={() => console.log("Mouse Over")}>Child</h1>
      <button onClick={() => console.log("Button 1 Pulsado")}>Boton 1</button>
      <button onClick={pressButton}>Boton 2</button>
      <button onClick={() => pressButtonParam("texto a mostrar")}>Boton 3</button>
      <input 
        onFocus={()=>console.log("Se invoco al focus")} 
        onChange={(event)=>console.log(event.target.value)}
        placeholder="Inserte texto"></input>
    </div>
  );
}

export default Child;