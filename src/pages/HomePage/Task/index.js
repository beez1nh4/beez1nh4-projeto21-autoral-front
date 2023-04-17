import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';

import Input from '../../../components/Form/Input';
import Button from '../../../components/Form/Button';
import { Row, Title, Label } from '../../../components/Auth';

import usePostTask from '../../../hooks/api/usePostTasks';
import dayjs from 'dayjs';
import AuthLayout from '../../../layouts/Auth';
import weekOfYear from 'dayjs/plugin/weekOfYear'
import Button2 from '../../../components/Button2';

export default function TaskCreation() {
  const [name, setName] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [status, setStatus] = useState('');
  const [weekNumber, setWeekNumber] = useState(0);
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [subjectId, setSubjectId] = useState(0);

  const { postTaskLoading, save } = usePostTask();

  const navigate = useNavigate();
  dayjs.extend(weekOfYear);

  async function submit(event) {
    event.preventDefault();

    try {
      setWeekNumber(dayjs.week());
      const body = {
        name,
        dueDate,
        status,
        weekNumber,
        description,
        type,
        subjectId
      }
      await save(body);
      toast('Tarefa criada com sucesso!');
      navigate('/home');
    } catch (err) {
      toast('Não foi possível fazer o login!');
    }
  } 

  return (
    <AuthLayout background={logo}>
      <Row>
        <Label>Nova tarefa</Label>
        <form onSubmit={submit}>
          <Input label="name" type="text" fullWidth value={name} onChange={e => setName(e.target.value)} />
          <Input label="status" type="text" fullWidth value={status} onChange={e => setStatus(e.target.value)} />
          <Button type="submit" color="primary" fullWidth disabled={postTaskLoading}>Salvar</Button>
        </form>
      </Row>
      <Button2 onClick ={()=> navigate("/home")} color="primary" >Voltar</Button2>
    </AuthLayout>
  );
}