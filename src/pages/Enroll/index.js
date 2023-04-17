import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import AuthLayout from '../../layouts/Auth';

import Input from '../../components/Form/Input';
import Button from '../../components/Form/Button';
import { Row, Title, Label } from '../../components/Auth';
import Link from '../../components/Link';

import useSignUp from '../../hooks/api/useSignUp';

export default function Enroll() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [birthday, setBirthday] = useState('');


  const { loadingSignUp, signUp } = useSignUp();

  const navigate = useNavigate();
  
  async function submit(event) {
    event.preventDefault();
    
    if (password !== confirmPassword) {
      toast('As senhas devem ser iguais!');
    } else {
      try {
        await signUp(email, password, username, formatDate(birthday)+'T13:57:31.123Z', photoUrl);
        toast('Inscrito com sucesso! Por favor, faça login.');
        navigate('/sign-in');
      } catch (error) {
        toast('Não foi possível fazer o cadastro!');
      }
    }
  }

  return (
    <AuthLayout background={logo}>
      <Row>
        <img src={logo} alt="Logo" width="60px" />
        <Title>Hocus Focus</Title>
      </Row>
      <Row>
        <Label>Inscrição</Label>
        <form onSubmit={submit}>
          <Input label="E-mail" type="text" fullWidth value={email} onChange={e => setEmail(e.target.value)} />
          <Input label="Username" type="text" fullWidth value={username} onChange={e => setUsername(e.target.value)} />
          <Input label="Photo Url" type="text" fullWidth value={photoUrl} onChange={e => setPhotoUrl(e.target.value)} />
          <Input label="Data de nascimento (DD-MM-YYYY)" format="dd-MM-yyyy" fullWidth value={birthday}onChange={e => setBirthday(e.target.value)} />
          <Input label="Senha" type="password" fullWidth value={password} onChange={e => setPassword(e.target.value)} />
          <Input label="Repita sua senha" type="password" fullWidth value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
          <Button type="submit" color="primary" fullWidth disabled={loadingSignUp}>Inscrever</Button>
        </form>
      </Row>
      <Row>
        <Link to="/sign-in">Já está inscrito? Faça login</Link>
      </Row>
    </AuthLayout>
  );
}

function formatDate(date){
  const day = date.slice(0, 2);
  const month = date.slice(3,5);
  const year = date.slice(-4);
  return `${year}-${month}-${day}`
}