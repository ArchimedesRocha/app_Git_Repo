// React Imports
import React, { useState, useCallback, useEffect} from "react";
import { Link } from "react-router-dom";

// Style Imports
import {Header, Form, SubmitButton, List, DeleteButton, EmptyError, EqualError, NotFoundError} from './styles'
import {FaGithub, FaPlus, FaSpinner, FaBars, FaTrash, FaExclamation} from 'react-icons/fa'

// API Imports
import api from '../services/api'

export default function Main(){

  const [getRepo, setGetRepo] = useState('');
  const [listRepo, setListRepo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [emptyError, setEmptyError] = useState(false);
  const [equalError, setEqualError] = useState(false);
  const [notFoundError, setNotFoundError] = useState(false);

// Find in local storage when component mount
useEffect(()=> {
  const repoStorage = localStorage.getItem('repos');

  if(repoStorage){
    setListRepo(JSON.parse(repoStorage));
  }
}, []);

// Save changes in local storage
useEffect(() => {
  if (listRepo.length > 0) {
    localStorage.setItem('repos', JSON.stringify(listRepo));
  }
}, [listRepo]);

// Get API repositories and show alerts
const handleSubmit = useCallback((e)=> {
    e.preventDefault();

    async function submit(){
      setLoading(true);      
      setEmptyError(false);
      setEqualError(false);
      setNotFoundError(false);

      try{

        if(getRepo === ''){
          setEmptyError(true);
          setLoading(false);
          setTimeout(() => setEmptyError(false), 5000);
          return;
        }        

        const hasRepo = listRepo.find(repo => repo.name === getRepo);

        if(hasRepo){
          setEqualError(true);
          setLoading(false);
          setTimeout(() => setEqualError(false), 5000);
          return;
        }

        const response = await api.get(`repos/${getRepo}`);

        const data = {
          name: response.data.full_name,
        }

        setListRepo([...listRepo, data]);
        setGetRepo('');
      }catch(error) {

        if(error.response && error.response.status === 404) {
          setNotFoundError(true);
          setTimeout(() => setNotFoundError(false), 5000);
        }

        else {
          console.log(error);
        }
        
      }
      
      finally{
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
            className={emptyError ? 'error' : '' || equalError ? 'error' : ''}
          />

          <SubmitButton loading={loading ? 1 : 0}>
            {loading ? (
              <FaSpinner style={{fill:'#2B2828'}} size={16}/>
            ) : (
              <FaPlus style={{fill:'white'}} size={16}/>
            )}
          </SubmitButton>
        </Form>
        
        <List>
          {listRepo.length > 0 ? (
            listRepo.map(repo =>(
              <li key={repo.name}>
                <span>
                  <DeleteButton onClick={()=>{handleDelete(repo.name)}}>
                    <FaTrash style={{fill:'#2B2828'}} size={16}/>
                  </DeleteButton>
                  {repo.name}
                </span>
                <Link to=""><FaBars style={{fill:'#2B2828'}} size={16}/></Link>
              </li>
              ))
            ) : (
              <p>Nenhum repositório foi carregado.</p>
            )}          
        </List>

        <NotFoundError className={notFoundError ? 'error' : ''}>
          <span><FaExclamation style={{fill:'#CC4F4F'}} size={14}/>Este repositório não existe, por favor digite um nome válido de repositório!</span>
        </NotFoundError>

        <EmptyError className={emptyError ? 'error' : ''}>
          <span><FaExclamation style={{fill:'#CC4F4F'}} size={14}/>Por favor informe um nome de repositório!</span>
        </EmptyError>

        <EqualError className={equalError ? 'error' : ''}>
          <span><FaExclamation style={{fill:'#CC4F4F'}} size={14}/>Este repositório já existe e não pode ser duplicado!</span>
        </EqualError>
      </div>
    </> 
  )
}