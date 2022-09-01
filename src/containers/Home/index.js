import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom'

import axios from 'axios';

import People from '../../assets/people.svg';
import Seta from '../../assets/seta.svg';

import H1 from '../../components/Title'
import ContainerItens from '../../components/Containeritens'; 
import Button from '../../components/Button'

import { Container,Image, InputLabel, Input } from "./styles";
function App() {
  const [users, setusers] = useState([]);
  const navigate = useNavigate();

  const inputName = useRef();
  const inputAge = useRef();
  
  

  async function addNewUser() {

    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value
    });
    
    
    setusers([...users, newUser,])
    
    
    navigate("/usuarios");
  
    

  }



  return (
    <Container>

      <Image alt="logo-imagem" src={People} />
      <ContainerItens>
        <H1>olá</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />

        <Button onClick={addNewUser}>
          Cadastrar <img alt="seta" src={Seta} />
        </Button>


      </ContainerItens>
    </Container>
  );
}

export default App 