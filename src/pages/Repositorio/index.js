import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from '../services/api';

export default function Repositorio() {
  // useParams hook para acessar o parâmetro da rota
  const { repositorio } = useParams();

  const  [repository, setRepository] = useState({});
  const  [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load(){
      const nomeRepo = decodeURIComponent(repositorio);

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
  }, [repositorio])

  return (
    <div className="container">

    </div>
  );
}
