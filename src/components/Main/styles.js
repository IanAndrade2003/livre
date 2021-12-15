import styled from "styled-components";

export const Container = styled.main`
  height: 100%;
  width: 100%;
  color: #fff;
  text-align: center;
`;

export const Ippo = styled.img`
  width: 100%;
  height: 100%;
`

export const Baki = styled.img`
  width: 100%;
  height: 100%;
`

export const Estilo = styled.img`
  width: 100%;
  height: 100%;
`

export const Treino = styled.img`
  width: 100%;
  height: 100%;
`

export const Boxconteudo = styled.section`
  display: flex;
  background-color: #ffffff;
  width: 100%;
  justify-content: space-evenly;
  background-color: #000000;
`

export const Boxippo = styled.div`
  display: flex;
  height: 100%;
  width: 12%;
  flex-direction: column;
  align-items: center;
  background-color: #000000;
`

export const Boxbaki = styled.div`
  display: flex;
  height: 100%;
  width: 20%;
  flex-direction: column;
  align-items: center;
  background-color: #000000;
`

export const Boxestilo = styled.div`
  display: flex;
  height: 100%;
  width: 18%;
  flex-direction: column;
  align-items: center;
  background-color: #000000;
`

export const Boxtreino = styled.div`
  display: flex;
  height: 100%;
  width: 24%;
  flex-direction: column;
  align-items: center;
  background-color: #000000;
`

export const Paragraph = styled.p`
  color: #ffffff;
`

export const Btn = styled.button`
  border: none;
  background-color: #FFD700;
  color: #ffffff;
  width: 100px;
  height: 30px;
  cursor: pointer;
`

export const Boxmotivo = styled.section`
  display: flex;
  width: 92%;
  height: 50%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: start;
  background-image: url(${(props) => props.background});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  margin-left: 4%;
`

export const Title = styled.h2`
  margin-left: 4%;
  color: #000000;
`

export const Subtitle = styled.h3`
  width: 45%;
  display: flex;
  margin-top: 4%;
  margin-bottom: 4%;
  margin-left: 4%;
  color: #000000;
`

export const Motivos = styled.p`
  width: 45%;
  margin-left: 4%;
  color: #000000;
`

export const Boxvideo = styled.div`
  flex-direction: column;
  align-items: flex-start;
  display: flex;
  width: 100%;
  height: 80vh;
  margin-left: 4%;
  color: #000000;
`