import { useState, useContext } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import useUser from '../../hooks/api/useUser';
import Page from '../../components/Page';
import Container from '../../components/Container';
import MiniContainer from '../../components/MiniContainer';
import Button from '../../components/Form/Button';
import LittleTitle from '../../components/LittleTitle';

export default function HomePage() {

  const navigate = useNavigate();

  const { user } = useUser();
  console.log(user)
  if (user){
  return (
    <>
    <Page>
    <h1>@{user.username}'s space</h1>
    <Container>
        <MiniContainer>
            <LittleTitle>To-Do List</LittleTitle>
        </MiniContainer>
        <MiniContainer>
            <LittleTitle>Activities</LittleTitle>
        </MiniContainer>
        <MiniContainer>
            <LittleTitle>Links</LittleTitle>
            <LittleTitle>More Content</LittleTitle>
            <Button onClick ={()=> navigate("/hobby")} color="primary" >Hobbies</Button>
            <Button onClick ={()=> navigate("/progress")} color="primary" >Progress</Button>
            <Button onClick ={()=> navigate("/reward")} color="primary" >Rewards</Button>
        </MiniContainer>
    </Container>
    </Page>
    </>
  );
  }
}