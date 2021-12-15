import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import * as S from "./styles";

export default function Header() {
  const data = useStaticQuery(graphql`
    query {
      livredata {
        headers {
          gambiarra
          home
          about
          services
          asking
          contact
          telefone {
            url
          }
          number
          analise
          discussao
          pedido
          background {
            url
          }
        }
      }
    }`);

  const query = data.livredata.headers[0];

  return (
    <>
      <S.Container background={query.background.url}>
        <S.Menu>
          <S.Logo>
            <p>{query.gambiarra}</p>
          </S.Logo>
          <S.Box>
          <S.List>
            <li>{query.home}</li>
            <li>{query.about}</li>
            <li>{query.services}</li>
            <li>{query.asking}</li>
            <li>{query.contact}</li>
          </S.List>
          <S.Boxcontact>
            <img src={query.telefone.url} alt="icone de telefone"/>
            <p>{query.number}</p>
          </S.Boxcontact>
          </S.Box>
        </S.Menu>
        <S.Boxtalk>
        <h2>{query.analise}</h2>
        <S.Paragraph>{query.discussao}</S.Paragraph>
        <S.Btn>{query.pedido}</S.Btn>
        </S.Boxtalk>
      </S.Container>
    </>
  );
}