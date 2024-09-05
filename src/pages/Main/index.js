// React Imports
import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";

// Style Imports
import {Header, Form, SubmitButton, List, DeleteButton} from './styles'
import {FaGithub, FaPlus, FaSpinner, FaBars, FaTrash} from 'react-icons/fa'

// API Imports
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

  const handleDelete = useCallback((repo) => {
    const find = listRepo.filter(r => r.name !== repo);
    setListRepo(find);
  }, [listRepo]);

  return(
    <>
      <Header>       
          <nav>
            <ul>
              <li>
                <Link to="/"><FaGithub style={{fill:'white'}} size={36}/> Meus repositórios</Link>
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
        
        <List>
          {listRepo.map(repo =>(
            <li key={repo.name}>
              <span>
                <DeleteButton onClick={()=>{handleDelete(repo.name)}}>
                  <FaTrash style={{fill:'black'}} size={16}/>
                </DeleteButton>
                {repo.name}
              </span>
              <Link to=""><FaBars style={{fill:'black'}} size={16}/></Link>
            </li>
          ))}
        </List>
      </div>
    </> 
  )
}