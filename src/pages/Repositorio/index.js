import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from '../services/api';
import { Owner, Loading, BackButton } from './styles'
import {FaArrowLeft} from 'react-icons/fa'


export default function Repositorio() {
  // useParams hook para acessar o parâmetro da rota
  const { getNameRepo } = useParams();

  const  [repository, setRepository] = useState({});
  const  [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);

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
    }

    load();
  }, [getNameRepo])

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
        <FaArrowLeft style={{fill:'white'}} size={14}/>
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
    </div>
  );
}
