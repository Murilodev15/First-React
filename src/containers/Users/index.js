import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

import axios from 'axios';

import people2 from '../../assets/people2.svg';
import Seta from '../../assets/seta.svg';
import Trash from '../../assets/trash.svg';

import H1 from '../../components/Title'
import ContainerItens from '../../components/Containeritens';
import Button from '../../components/Button'

import { Container, Image,User } from "./styles";


function Users() {
  const [users, setusers] = useState([]);
  const navigate = useNavigate();




  useEffect(() => {

    async function fetchUsers(){
      const {data: newUsers} = await axios.get("http://localhost:3001/users")

      setusers(newUsers)
    }
   fetchUsers()

  },[])


 async function deleteUser(userId) {
  await axios.delete(`http://localhost:3001/users/${userId}`)
    const newUsers = users.filter(user => user.id !== userId)

    setusers(newUsers)
  }


  return (
    <Container>
  
      <Image alt="logo-imagem" src={people2} />
      <ContainerItens isBlur={true}>
        <H1>Usuários</H1>

      
    
        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> - <p>{user.age} </p>
              <button onClick={() => deleteUser(user.id)}> <img src={Trash} alt='lata-de-lixo' /> </button>
            </User>
          ))
          }
        </ul>

        <Button isBack={true} onClick={() => navigate('/')}>
        <img alt="seta" src={Seta} /> Voltar 
        </Button>

      </ContainerItens>
    </Container>
  );
}

export default Users;