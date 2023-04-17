import { useState, useContext } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import useUser from '../../hooks/api/useUser';
import Page from '../../components/Page';
import Container from '../../components/Container';
import MiniContainer from '../../components/MiniContainer';
import Button from '../../components/Form/Button';
import LittleTitle from '../../components/LittleTitle';
import Tasks from '../../components/Home/Tasks';

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
            <Tasks/>
        </MiniContainer>
        <MiniContainer>
            <LittleTitle>Activities</LittleTitle>
        </MiniContainer>
        <MiniContainer>
            <LittleTitle>Links</LittleTitle>
            <LittleTitle>More Content</LittleTitle>
            <Button onClick ={()=> navigate("/subject")} color="primary" >Subjects</Button>
            <Button onClick ={()=> navigate("/hobby")} color="primary" >Hobbies</Button>
            <Button onClick ={()=> navigate("/progress")} color="primary" >Progress</Button>
            <Button onClick ={()=> navigate("/reward")} color="primary" >Rewards</Button>
            <Button onClick ={()=> navigate("/studysession")} color="primary" >Study Sessions</Button>
        </MiniContainer>
    </Container>
    </Page>
    </>
  );
  }
}