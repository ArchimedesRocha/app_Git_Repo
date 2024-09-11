import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from '../services/api';
import { Owner, Loading, BackButton, IssuesList, PageActions } from './styles'
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa'


export default function Repositorio() {
  // useParams hook para acessar o parâmetro da rota
  const { getNameRepo } = useParams();

  const  [repository, setRepository] = useState({});
  const  [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function load(){
      const nomeRepo = decodeURIComponent(getNameRepo);

      const [repositorioData, issuesData] = await Promise.all([
        api.get(`/repos/${nomeRepo}`),
        api.get(`/repos/${nomeRepo}/issues`, {
          params: {
            state: 'open',
            per_page: 5
          }
        })
      ]);

      setRepository(repositorioData.data);
      setIssues(issuesData.data);
      setLoading(false);

      console.log(issuesData.data)
    }

    load();
  }, [getNameRepo]);

  useEffect(() => {

    async function loadIssue(){

      const nomeRepo = decodeURIComponent(getNameRepo);
      const response = await api.get(`/repos/${nomeRepo}/issues`, {
        params: {
          state: 'open',
          page,
          per_page: 5,
        }
      });

      setIssues(response.data);
    }

    loadIssue()

  }, [getNameRepo, page]);

  function handlePage(action) {
    setPage(action === 'back' ? page -1 : page +1)
  }

  if(loading){
    return(
      <Loading>
        <h1>Carregando...</h1>
      </Loading>
    )
  }

  return (
    <div className="container">

      <BackButton to="/">
        <FaArrowLeft style={{fill:'white'}} size={16}/>
        Voltar
      </BackButton>

      <Owner>
        <img 
          src={repository.owner.avatar_url}
          alt={repository.owner.login}
        />

        <div className="text">
          <h1>{repository.name}</h1>
          <p>{repository.description}</p>
        </div>
      </Owner>

      <IssuesList>
        {issues.map(issue => (
            <li key={String(issue.id)}>
              <img 
                src={issue.user.avatar_url}
                alt={issue.user.login}
              />

              <div>
                <h3><span>Author:</span> {issue.user.login}</h3>
                <h4><span>URL:</span> <Link to={issue.html_url} target="_blank" rel="noopener noreferrer">{issue.title}</Link></h4>
                <p>Issues: {issue.labels.map(label=>(                  
                  <span key={String(label.id)}> {label.name}</span>
                ))}</p>
              </div>
            </li>     
        ))}
      </IssuesList>

      <PageActions>
        <button 
        type="button"
        onClick={()=> handlePage('prev')}
        disabled={page < 2}
        >        
          <FaArrowLeft style={{fill:'white'}} size={16}/>
          Voltar
        </button>

        <button 
        type="button"
        onClick={()=> handlePage('next')}
        > 
          Próximo        
          <FaArrowRight style={{fill:'white'}} size={16}/>
        </button>
      </PageActions>
    </div>
  );
}
