import React, { Component } from "react";

import { Listadopersonas } from "./../services/personasService";
import Personas from "./personas";
import { stat } from "fs";
class Contador extends Component {
  state = {

    datos:Listadopersonas()
  
   
  };

  
  render() {
  

    return (
      <div>
      
     <h1>personas {this.state.datos.length}</h1>
       
      
      
      </div>
    );
  }
}
export default Contador;
