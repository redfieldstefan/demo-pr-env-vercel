import React, {useState} from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px dashed black;
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
        <TodoText>{todo.title}</TodoText>
        <p>{todo.due.readable}</p>
    </Container>
  )
};

export default Todo;