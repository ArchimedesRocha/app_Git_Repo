import React from "react";
import { useParams } from "react-router-dom";

export default function Repositorio() {
  // useParams hook para acessar o parâmetro da rota
  const { repositorio } = useParams();

  return (
    <h1>
      {decodeURIComponent(repositorio)}
    </h1>
  );
}
