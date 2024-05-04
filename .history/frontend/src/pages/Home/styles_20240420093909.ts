import styled from "styled-components";

import { homebackground } from "../../assets";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
`;

export const Header = styled.div`
    width: 100vw;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-image: url(${homebackground});
    background-size: cover;
    background-position: center;
    position: relative;
`;

export const Info = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 40%;
    padding: 30px;
    display: flex;
`;

export const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: visible;

`;

export const LogoDiv = styled.div`
  display: flex;
  width: 15%;
  height: 100%;
`;

export const TagDiv = styled.div`
  display: flex;
  margin-left: 5%;
  width: 30%;
  height: 100%;
`;

export const Tags = styled.select`
  border: none;
`

export const SearchBarDiv = styled.div`
  display: flex;
  background-color: #fff;
  width: 90%;
  height: 48px;
  border-radius: 5px;
`

export const SelectOnBarDiv = styled.div`
  display: flex;
  width: 30%;
  margin: 5px;
  align-items: center;
  justify-content: center;
  border-style: solid;
  border-color: black;
  border-width: 2px;
  border-radius: 5px;
`

export const Input = styled.input`
  width: 100%;

`
export const Select = styled.select`
  width: 100%;

`
