import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";

import {Header, Form, SubmitButton} from './styles'
import {FaGithub, FaPlus, FaSpinner} from 'react-icons/fa'

import api from '../services/api'

export default function Main(){

  const [getRepo, setGetRepo] = useState('');
  const [listRepo, setListRepo] = useState([])
  const [loading, setLoading] = useState(false)

  const handleSubmit = useCallback((e)=> {    
    e.preventDefault();

    async function submit(){
      setLoading(true);      
      try{
        const response = await api.get(`repos/${getRepo}`)

        const data = {
          name: response.data.full_name,
        }

        setListRepo([...listRepo, data]);
        setGetRepo('');
      }catch(error) {
        console.log(error);
      }finally{
        setLoading(false);
      }
    }

    submit();
  }, [getRepo, listRepo]);

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
      <Form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Buscar repositório"
          value={getRepo}
          onChange={(e) => {setGetRepo(e.target.value)}}
        />

        <SubmitButton loading={loading ? 1 : 0}>
          {loading ? (
            <FaSpinner style={{fill:'black'}} size={16}/>
          ) : (
            <FaPlus style={{fill:'black'}} size={16}/>
          )}
        </SubmitButton>
      </Form>
      
    </div>
  </> 
)
}