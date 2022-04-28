import React, {useState} from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px dashed black;
  border-radius: 3px;
  padding: 10px;
  min-height: 100px;
  width: 200px;
  margin: 5px;
  display: flex;
  flex-direction: column;
`;

const Row = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 5px 0;
`;



const Todo = (initialTodo) => {

  const [todo, setTodo] = useState(initialTodo);

  const handleCheck = () => {
    setTodo({
      ...todo,
      completed: !todo.completed
    })
  }

  return (
    <Container>
      <Row>
        <p>{todo.id}</p>
        <input type="checkbox" onClick={handleCheck} checked={todo.completed}/>
      </Row>
        <b>{todo.title}</b>
        <p>{todo.due.readable}</p>
    </Container>
  )
};

export default Todo;