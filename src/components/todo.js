import { isToday } from 'date-fns';
import React, {useState} from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px dashed ${props => props.pastDue ? 'red' : 'black'};
  border-radius: 3px;
  padding: 5px 10px 15px 10px;
  min-height: 100px;
  width: 200px;
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Row = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 5px 0;
`;

const TodoText = styled.p`
  font-weight: bold;
  margin-bottom: 5px;
`;

const DateString = styled.span`
  color: ${props => props.pastDue ? "red" : "black"};
`;

const Todo = (initialTodo) => {

  const [todo, setTodo] = useState(initialTodo);

  const handleCheck = () => {
    setTodo({
      ...todo,
      completed: !todo.completed
    })
  };

  const pastDue = Date.now() - todo.due.date > 0 && !todo.completed;

  return (
    <Container pastDue={pastDue}>
      <Row>
        <p>{todo.id}</p>
        <input type="checkbox" onClick={handleCheck} checked={todo.completed}/>
      </Row>
        <TodoText>{todo.title}</TodoText>
        <p>Due Date: <DateString pastDue={pastDue}>{todo.due.readable}</DateString></p>
    </Container>
  )
};

export default Todo;