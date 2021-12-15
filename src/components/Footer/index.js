import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import * as S from "./styles";

export default function Footer() {
  const data = useStaticQuery(graphql`
    query {
      livredata {
        footers {
          gambiarra
          location
          postagem
          quick
          socials
          endereco
          postagem1
          postagem2
          home
          about
          services
          pedidos
          contact
          twitter
          facebook
          google
          pinterest
        }
      }
    }
  `);

  const query = data.livredata.footers[0];
  
  return (
    <>
    <S.Container>
    <section>
      <S.Title>{query.gambiarra}</S.Title>
    </section>
    <S.Boxloc>
      <h2>{query.location}</h2>
      <S.Paragraphloc>{query.endereco}</S.Paragraphloc>
    </S.Boxloc>
    <S.Boxpost>
      <h2>{query.postagem}</h2>
      <S.Post>{query.postagem1}</S.Post>
      <S.Post>{query.postagem2}</S.Post>
    </S.Boxpost>
      <S.Boxquick>
        <h2>{query.quick}</h2>
        <S.Quick>{query.home}</S.Quick>
        <S.Quick>{query.about}</S.Quick>
        <S.Quick>{query.services}</S.Quick>
        <S.Quick>{query.pedidos}</S.Quick>
        <S.Quick>{query.contact}</S.Quick>
    </S.Boxquick>
    <S.Boxcontact>
      <h2>{query.socials}</h2>
        <S.Contact>{query.twitter}</S.Contact>
        <S.Contact>{query.facebook}</S.Contact>
        <S.Contact>{query.google}</S.Contact>
        <S.Contact>{query.pinterest}</S.Contact>
    </S.Boxcontact>
    </S.Container>
    </>
  );
}