import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import * as S from "./styles";

export default function Main() {
  const data = useStaticQuery(graphql`
    query {
      livredata {
        mains {
          ippo {
            url
          }
          baki {
            url
          }
          estilos {
            url
          }
          treino {
            url
          }
          makunouchi
          hanma
          estilo
          treinamento
          veja
          background {
            url
          }
          why
          falar
          motivo1
          motivo2
          motivo3
          opiniao
          video1 {
            url
          }
          video2 {
            url
          }
        }
      }
    }
  `);

  const query = data.livredata.mains[0];

  return (
    <>
      <S.Container>
        <S.Boxconteudo>
          <S.Boxippo>
          <S.Ippo src={query.ippo.url} alt="makunouchi ippo"/>
          <S.Paragraph>{query.makunouchi}</S.Paragraph>
          <S.Btn>{query.veja}</S.Btn>
          </S.Boxippo>
          <S.Boxbaki>
          <S.Baki src={query.baki.url} alt="hanma baki"/>
          <S.Paragraph>{query.hanma}</S.Paragraph>
          <S.Btn>{query.veja}</S.Btn>
          </S.Boxbaki>
          <S.Boxestilo>
          <S.Estilo src={query.estilos.url} alt="estilos de luta"/>
          <S.Paragraph>{query.estilo}</S.Paragraph>
          <S.Btn>{query.veja}</S.Btn>
          </S.Boxestilo>
          <S.Boxtreino>
          <S.Treino src={query.treino.url} alt="treinos de lutadores"/>
          <S.Paragraph>{query.treinamento}</S.Paragraph>
          <S.Btn>{query.veja}</S.Btn>
          </S.Boxtreino>
        </S.Boxconteudo>
        <S.Boxmotivo background={query.background.url}>
          <S.Title>{query.why}</S.Title>
          <S.Subtitle>{query.falar}</S.Subtitle>
          <S.Motivos>{query.motivo1}</S.Motivos>
          <S.Motivos>{query.motivo2}</S.Motivos>
          <S.Motivos>{query.motivo3}</S.Motivos>
          <S.Boxvideo>
          <p>{query.opiniao}</p>
          <iframe width="580" height="240" src={query.video1.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="580" height="240" src={query.video2.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </S.Boxvideo>
        </S.Boxmotivo>
      </S.Container>
    </>
  );
}