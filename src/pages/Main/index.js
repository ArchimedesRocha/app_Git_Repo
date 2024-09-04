import React from "react";
import { Link } from "react-router-dom";

import {Header, Form, SubmitButton} from './styles'
import {FaGithub, FaPlus} from 'react-icons/fa'

export default function Main(){
return( 
  <>
    <Header>       
        <nav>
          <ul>
            <li>
              <Link to="/"><FaGithub style={{fill:'white'}} size={16}/> Meus repositórios</Link>
            </li>
          </ul>
        </nav>
    </Header>
      
    <div className="container">
      <Form onSubmit={() =>{}}>
        <input type="text" placeholder="Buscar repositório"/>

        <SubmitButton>
          <FaPlus style={{fill:'black'}} size={16}/>
        </SubmitButton>
      </Form>
      
    </div>
  </> 
)
}