import styled from "styled-components";

export const Container = styled.header`
  height: calc(88vh - 4.2rem);
  color: #fff;
  text-align: center;
  background-image: url(${(props) => props.background});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 100%;
`;

export const Menu = styled.div`
  display: flex;
  width: 100%;
  height: 10%;
  align-items: center;
  justify-content: flex-end;
  background-color: #ffffff;
  color: #000000;
`

export const List = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-evenly;
  width: 60%;
`

export const Logo = styled.div`
  display: flex;
  width: 20%;
`

export const Boxcontact = styled.div`
  display: flex;
  width: 40%;
`

export const Box = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 60%;
`

export const Boxtalk = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 80%;
  justify-content: space-evenly;
  color: #00BFFF;
`

export const Paragraph = styled.p`
  width: 30%;
  color: #000000;
`

export const Btn = styled.button`
  border: none;
  background-color: #FFD700;
  color: #ffffff;
  width: 30%;
  height: 10%;
  font-size: 18px;
  cursor: pointer;
`