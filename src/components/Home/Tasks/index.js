import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import useGetTasks from '../../../hooks/api/useGetTasks';
import Item from '../../Item';
import { useNavigate } from 'react-router-dom';
import Label from '../../Label';
import Button2 from '../../Button2';

export default function Tasks() {
  const { getTasksLoading, getTasks } = useGetTasks();
  const [tasks, setTasks] = useState(null);
  const navigate = useNavigate();

  useEffect(async () => {
    try {
      const tasksList = await getTasks();
      setTasks(tasksList);
    } catch (err) {
      toast('Um erro apareceu ao trazer as informações!');
    }
  }, [getTasksLoading]);

  return (
    <>
          {tasks && (
            <>
                {tasks.map((task) => (
                  <Item
                    key={task.id}
                    onClick={() => { navigate(`/task/${task.id}`)
                    }}
                  >
                    <h1>{task.name}</h1>
                    <h2>{task.dueDate}</h2>
                    <Label>{task.status}</Label>
                  </Item>
                ))}
            </>
          )}
          <Button2 onClick ={()=> navigate("/task")} color="primary" > + Criar nova tarefa</Button2>
        </>
  );
}
