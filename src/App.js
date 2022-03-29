import React from 'react'
import { TodoCounter } from './TodoCounter'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList'
import { TodoItem } from './TodoItem'
import { CreateTodoButton } from './CreateTodoButton'
// import './App.css';

const defaultTodos = [
  { 
    text: 'Cortar Cebolla', 
    completed: true 
  },
  { 
    text: 'Tomar el curso de intro a React', 
    completed: false 
  },
  { 
    text: 'Llorar con la llorona', 
    completed: false 
  },
  { 
    text: 'Irnos a dormir', 
    completed: false 
  }
]

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');
  
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })
  }

  return (
    <>
      <TodoCounter 
        total={totalTodos}
        completed={completedTodos}
      />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      /> 
      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem key={todo.text}
          text={todo.text}
          completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
